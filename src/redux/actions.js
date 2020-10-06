import {CALC_INT} from './actionTypes';

//action to calculate interest
export const calcInt = (principal, rate, years) => {
    return {
        type: CALC_INT,
        principal,
        rate,
        years,
    };
}
