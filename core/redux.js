// @flow
import React from 'react';
import { Provider } from 'react-redux';
import initializeStore from './store';
import { doLoadUsers } from './store/actions';

let reduxStore;

const getOrInitializeStore = (initialState: Object) => {
  // if we're on the server side, make a new store
  if (typeof window === 'undefined') {
    return initializeStore(initialState);
  }

  // if no store exists on the client, make a new one
  if (!reduxStore) {
    reduxStore = initializeStore(initialState);
  }

  return reduxStore;
};

type HocProps = {
  initialReduxState: Object,
};

const withRedux = (PageComponent: any, { ssr = true }: Object = {}) => {
  const WithRedux = ({ initialReduxState, ...props }: HocProps) => {
    const store = getOrInitializeStore(initialReduxState);
    return (
      <Provider store={store}>
        <PageComponent {...props} />
      </Provider>
    );
  };

  if (ssr || PageComponent.getInitialProps) {
    WithRedux.getInitialProps = async ctx => {
      // scaffold a new context object to be used on pages' getInitialProps
      const context = ctx;

      // get or initialiaze the Redux store
      const store = getOrInitializeStore();
      context.reduxStore = store;

      // check if the users data already exists...
      const { users } = store.getState();

      if (!users || !users.length) {
        // if not, load users and save to store
        await store.dispatch(doLoadUsers());
      }

      // exexcute the wrapped page's getInitialProps
      const pageProps =
        typeof PageComponent.getInitialProps === 'function'
          ? await PageComponent.getInitialProps(context)
          : {};

      // send down getInitialProps results and initial state to the wrapped page
      return {
        ...pageProps,
        initialReduxState: store.getState(),
      };
    };
  }

  return WithRedux;
};

export default withRedux;
