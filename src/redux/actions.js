import {SET_PRINCIPAL, SET_RATE, SET_YEARS} from './actionTypes';

export const setPrincipal = (principal) => {
    return {
        type: SET_PRINCIPAL,
        principal,
    };
}

export const setRate = (rate) => {
    return {
        type: SET_RATE,
        rate,
    };
}

export const setYears = (years) => {
    return {
        type: SET_YEARS,
        years,
    };
}