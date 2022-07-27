import { _getQuestions } from "../../services/_DATA"
import { GET_QUESTIONS, UPDATE_UNANSWERED_QUESTIONS } from "./constants";

export const getQuestions = () => async dispatch =>{
  const response  = await  _getQuestions();
  dispatch({
    type: GET_QUESTIONS,
    payload: response
  });
};

export const updateUnansweredQuestions = (questions) => dispatch => {
  dispatch ({
    type: UPDATE_UNANSWERED_QUESTIONS,
    payload: questions
  });
};