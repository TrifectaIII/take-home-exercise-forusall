import {SET_PRINCIPAL, SET_RATE, SET_YEARS} from './actionTypes';

const initialState = {
    principal: undefined,
    rate: undefined,
    years: undefined,
    final: undefined,
    gained: undefined,
}

export default (state = initialState, action) => {

    switch(action.type) {
        case SET_PRINCIPAL:
            return state;
        case SET_RATE:
            return state;
        case SET_YEARS:
            return state;
        default:
            return state;
    }
}