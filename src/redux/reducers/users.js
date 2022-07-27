import { GET_USERS, LOG_IN } from "../actions/constants";

const initialState = {
  authUser: null,
  users: null,
  userArr: []
};

function userReducer (state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      const usersObj = action.payload;
      const userList = Object.keys(usersObj)
      .map(key => {
        return usersObj[key];
      });
      return {
        ...state,
        users: usersObj,
        userArr: userList
      }
    case LOG_IN:
      const user = state.users && state.users[action.payload];
      return {
        ...state,
        authUser: user
      }
    default:
      return state
  }
}

export default userReducer;