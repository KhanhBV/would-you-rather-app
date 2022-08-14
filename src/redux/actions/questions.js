import {
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../../services/_DATA";
import {
  GET_QUESTIONS,
  SAVE_QUESTION_ANSWER,
  UPDATE_UNANSWERED_QUESTIONS,
  UPDATE_ANSWERED_QUESTIONS,
  SAVE_QUESTION,
} from "./constants";

export const getQuestions = () => async (dispatch) => {
  const response = await _getQuestions();
  dispatch({
    type: GET_QUESTIONS,
    payload: response,
  });
};

export const saveQuestionAnswer =
  (authedUser, qid, answer) => async (dispatch) => {
    const response = await _saveQuestionAnswer({ authedUser, qid, answer });
    dispatch({
      type: SAVE_QUESTION_ANSWER,
      payload: response.questions,
    });
  };

export const saveQuestion =
  (optionOneText, optionTwoText, author) => async (dispatch) => {
    const response = await _saveQuestion({
      optionOneText,
      optionTwoText,
      author,
    });
    dispatch({
      type: SAVE_QUESTION,
      payload: response,
    });
  };

export const updateAnsweredQuestions = (questions) => (dispatch) => {
  dispatch({
    type: UPDATE_ANSWERED_QUESTIONS,
    payload: questions,
  });
};

export const updateUnansweredQuestions = (questions) => (dispatch) => {
  dispatch({
    type: UPDATE_UNANSWERED_QUESTIONS,
    payload: questions,
  });
};
