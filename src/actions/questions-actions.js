import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';


export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const fetchQuestionsSuccess = questions => ({
    type: FETCH_QUESTIONS_SUCCESS,
    data: questions
});

export const fetchQuestions = ()=>dispatch=>{
  return fetch(`${API_BASE_URL}/questions`, {
    method:'GET'
})
.then(res => normalizeResponseErrors(res))
.then(res=>res.json())
.then((res) => dispatch(fetchQuestionsSuccess(res)))
}

export const CORRECT_ANSWER = 'CORRECT_ANSWER';
export const correctAnswer= ()=>({
type: CORRECT_ANSWER,
})

export const WRONG_ANSWER = 'WRONG_ANSWER';
export const wrongAnswer= ()=>({
type: WRONG_ANSWER,
})