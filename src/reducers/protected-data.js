import { FETCH_PROTECTED_DATA_SUCCESS, FETCH_PROTECTED_DATA_ERROR,
	CORRECT_ANSWER, WRONG_ANSWER,RESET_FEEDBACK } from '../actions/protected-data';



const initialState = {
	data: 
		{
			correct: 0,
			incorrect: 0,
			question:{},
			head:0,
		},
	
	feedback:null,
	error: null
};

export default function reducer(state = initialState, action) {
	if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
		return Object.assign({}, state, {
			data: action.data,
			error: null
		});
	} else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
		return Object.assign({}, state, {
			error: action.error
		});
	}else if (action.type===CORRECT_ANSWER){
    return Object.assign({}, state, {feedback:"Correct, good job!", error:null})
  }else if (action.type===WRONG_ANSWER){
    return Object.assign({}, state, {feedback:`The correct answer is ${state.data.question.answer}`, error:null})
  }else if (action.type===RESET_FEEDBACK){
		return Object.assign({}, state, {feedback:null})
	}
	return state;
}
