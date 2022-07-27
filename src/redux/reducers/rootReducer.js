import { combineReducers } from "redux";
import questionsReducer from "./questions";
import userReducer from "./users";

const rootReducer = combineReducers({
  users: userReducer,
  questions: questionsReducer
})

export default rootReducer;