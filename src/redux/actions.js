import {CALC_INT_SIMPLE, CALC_INT_COMPOUND} from './actionTypes';

//action to calculate interest
export const calcIntSimple = (principal, rate, years) => {
    return {
        type: CALC_INT_SIMPLE,
        principal,
        rate,
        years,
    };
}

export const calcIntCompound = (principal, rate, years, times) => {
    return {
        type: CALC_INT_COMPOUND,
        principal,
        rate,
        years,
        times,
    };
}
