import { GET_USERS, LOG_IN, SAVE_QUESTION } from "../actions/constants";
import { LOG_OUT } from "./../actions/constants";

const initialState = {
  authUser: null,
  users: null,
  userArr: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      const usersObj = action.payload;
      const userList = Object.keys(usersObj).map((key) => {
        return usersObj[key];
      });
      return {
        ...state,
        users: usersObj,
        userArr: userList,
      };
    case LOG_IN:
      const { payload } = action;
      let user;
      if (typeof payload === "object" && payload) {
        user = payload;
      } else {
        user = state.users && state.users[action.payload];
      }
      localStorage.setItem("authUser", JSON.stringify(user));
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
        users,
      };
    default:
      return state;
  }
}

export default userReducer;
