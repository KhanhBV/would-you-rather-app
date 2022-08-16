import {
  GET_USERS,
  LOG_IN,
  SAVE_QUESTION,
  SAVE_QUESTION_ANSWER,
} from "../actions/constants";
import { LOG_OUT } from "./../actions/constants";

const initialState = {
  authUser: null,
  users: null,
  userArr: [],
};

const renderUserArr = (usersObj) => {
  return Object.keys(usersObj).map((key) => {
    return usersObj[key];
  });
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      const usersObj = action.payload;
      const userList = renderUserArr(usersObj);
      return {
        ...state,
        users: usersObj,
        userArr: userList,
      };
    case LOG_IN:
      const { payload } = action;
      const user = state.users && state.users[payload];
      return {
        ...state,
        authUser: user,
      };
    case LOG_OUT:
      localStorage.removeItem("authUser");
      return {
        ...state,
        authUser: null,
      };
    case SAVE_QUESTION:
      const users = { ...state.users };
      const submitUser = users && users[action.payload.author];
      submitUser.questions.push(action.payload.id);
      return {
        ...state,
        users
      };
    case SAVE_QUESTION_ANSWER:
      const userObj = action.payload.users;
      const userArr = renderUserArr(userObj);
      return {
        ...state,
        users: userObj,
        userArr,
        authUser: userObj[state.authUser?.id]
      };
    default:
      return state;
  }
}

export default userReducer;
