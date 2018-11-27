import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
    type: FETCH_PROTECTED_DATA_SUCCESS,
    data
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
    type: FETCH_PROTECTED_DATA_ERROR,
    error
});


export const fetchStats= ()=>(dispatch, getState)=>{
    console.log("AHhhHHHHHHHHHHHH")
    const authToken = getState().auth.authToken;
    console.log(authToken);
    const userId = getState().auth.currentUser.id;
    const username = getState().auth.currentUser.username;
    const body = {username, userId};
    console.log(body);
   return fetch(`${API_BASE_URL}/stats`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            Authorization: `Bearer ${authToken}`,
            'content-type': 'application/json'
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((res) =>{
            dispatch(fetchProtectedData())
        } )
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};


export const fetchProtectedData =() => (dispatch, getState) => {
    const authToken = getState().auth.authToken;

    return fetch(`${API_BASE_URL}/stats`, {
        method: 'GET',
        // body: JSON.stringify(body),
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((res) => dispatch(fetchProtectedDataSuccess(res)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};
