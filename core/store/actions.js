// @flow
import fetch from 'isomorphic-fetch';
import { API_URL, USER_COUNT, LOAD_USERS, MODIFY_USER } from '../constants';
import { type CardType } from '../../components/card';

export const doLoadUsers = () => (dispatch: Function) =>
  fetch(`${API_URL}${USER_COUNT}`)
    .then(r => r.json())
    .then(data =>
      dispatch({
        type: LOAD_USERS,
        payload: data.results || [],
      })
    );

export const doModifyUser = (userData: CardType) => (dispatch: Function) => {
  dispatch({
    type: MODIFY_USER,
    payload: userData,
  });
};
