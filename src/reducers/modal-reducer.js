import {STATS_MODAL_ON, STATS_MODAL_OFF} from '../actions/modal-actions';

const initialState={
    showStatsModal: false
}

const modalReducer=(state=initialState, action)=>{

    if (action.type===STATS_MODAL_ON){
        return Object.assign({}, state, {showStatsModal:true})
    }else if (action.type===STATS_MODAL_OFF){
        return Object.assign({}, state, {showStatsModal:false})
    }
    return state;

}

export default modalReducer;