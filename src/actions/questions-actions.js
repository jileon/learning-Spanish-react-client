import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import axios from 'axios';

export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const fetchQuestionsSuccess = (question,answer) => ({
    type: FETCH_QUESTIONS_SUCCESS,
    question,
    answer
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


export const ADD_CORRECT = 'ADD_CORRECT';
export const addCorrect = num=>({
    type: ADD_CORRECT,
    num
});



export const WRONG_ANSWER = 'WRONG_ANSWER';
export const wrongAnswer= ()=>({
type: WRONG_ANSWER,
})



export const updateStats= (id, correct, incorrect)=>(dispatch, getState)=>{
    console.log('update stats')
    const authToken = getState().auth.authToken;
    const data = getState().protectedData.data;
    data.correct=correct;
    data.incorrect=incorrect;
    console.log(data);
    return axios(`${API_BASE_URL}/stats/${id}`, {
        method: 'PUT',
        data:data ,
        headers: {
            Authorization: `Bearer ${authToken}`,

        }
    })
    .then(({data})=>console.log(data))
}