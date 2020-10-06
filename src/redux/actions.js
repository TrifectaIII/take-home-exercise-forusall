import actionTypes from './actionTypes';

export const setPrincipal = (principal) => {
    return {
        type: actionTypes.SET_PRINCIPAL,
        principal,
    };
}

export const setRate = (rate) => {
    return {
        type: actionTypes.SET_RATE,
        rate,
    };
}

export const setYears = (years) => {
    return {
        type: actionTypes.SET_YEARS,
        years,
    };
}