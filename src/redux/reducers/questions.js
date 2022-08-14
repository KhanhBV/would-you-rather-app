import {
  GET_QUESTIONS,
  SAVE_QUESTION_ANSWER,
  UPDATE_UNANSWERED_QUESTIONS,
  UPDATE_ANSWERED_QUESTIONS,
  SAVE_QUESTION,
} from "../actions/constants";

const initialState = {
  questions: null,
  answeredQuestions: [],
  unansweredQuestions: [],
};

function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    case SAVE_QUESTION_ANSWER:
      return {
        ...state,
        questions: action.payload,
      };
    case UPDATE_UNANSWERED_QUESTIONS:
      return {
        ...state,
        unansweredQuestions: action.payload,
      };
    case UPDATE_ANSWERED_QUESTIONS:
      return {
        ...state,
        answeredQuestions: action.payload,
      };

    case SAVE_QUESTION:
      const question = action.payload;
      const { id } = question;
      const questions = { ...state.questions };
      questions[id] = question;
      return {
        ...state,
        questions,
      };

    default:
      return state;
  }
}

export default questionsReducer;
