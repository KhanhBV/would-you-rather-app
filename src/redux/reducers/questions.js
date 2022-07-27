import { GET_QUESTIONS, UPDATE_UNANSWERED_QUESTIONS } from "../actions/constants";

const initialState = {
  questions: null,
  answeredQuestions: [],
  unansweredQuestions: []
}

function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        questions: action.payload
      }
      case UPDATE_UNANSWERED_QUESTIONS:
        return {
          ...state,
          unansweredQuestions: action.payload
        }
  
    default:
      return state;
  }
}

export default questionsReducer;