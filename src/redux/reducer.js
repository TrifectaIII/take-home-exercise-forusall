import actionTypes from './actionTypes';

const initialState = {
    principal: null,
    rate: null,
    years: null,
    final: null,
    gained: null,
}

export default (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.SET_PRINCIPAL:

        case actionTypes.SET_RATE:

        case actionTypes.SET_YEARS:

        default:
            return state;
    }
}