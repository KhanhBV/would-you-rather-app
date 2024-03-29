import { _getUsers } from "../../services/_DATA";
import { GET_USERS, LOG_IN, LOG_OUT } from "./constants";

export const login = (user) => (dispatch) => {
  dispatch({
    type: LOG_IN,
    payload: user,
  });
};

export const getUsers = () => async (dispatch) => {
  const response = await _getUsers().then((response) => response);
  dispatch({
    type: GET_USERS,
    payload: response,
  });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOG_OUT,
  });
};
