import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer, { initialState } from './reducer';

const initializeStore = (preloadedState = initialState) =>
  createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  );

export default initializeStore;
