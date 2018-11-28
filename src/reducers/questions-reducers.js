import {FETCH_QUESTIONS_SUCCESS, CORRECT_ANSWER, WRONG_ANSWER} from '../actions/questions-actions';


const initialState = {
  question:"",
  answer: "",
  stats:[],
  feedback:"",
  error: null,
};

export default function questionsReducer(state = initialState, action) {
  if (action.type === FETCH_QUESTIONS_SUCCESS) {
      return Object.assign({}, state, {
          question:action.question,
          asnwer:action.answer,
          error: null
      });
  } else if (action.type===CORRECT_ANSWER){
    return Object.assign({}, state, {feedback:"Correct, good job!", error:null})
  }else if (action.type===WRONG_ANSWER){
    return Object.assign({}, state, {feedback:`The correct answer is ${state.answer}`, error:null})
  }
  return state;
}
