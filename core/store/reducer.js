import { LOAD_USERS, MODIFY_USER } from '../constants';

export const initialState = {
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case MODIFY_USER:
      return {
        ...state,
        users: state.users.map(user =>
          user.login.uuid === action.payload.login.uuid ? action.payload : user
        ),
      };
    default:
      return state;
  }
};

export default reducer;
