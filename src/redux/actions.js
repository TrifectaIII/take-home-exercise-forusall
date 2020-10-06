import {CALC_INT} from './actionTypes';

export const calcInt = (principal, rate, years) => {
    return {
        type: CALC_INT,
        principal,
        rate,
        years,
    };
}
