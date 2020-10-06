import {CALC_INT} from './actionTypes';

const initialState = {
    final: null,
    gained: null,
}

export default (state = initialState, action) => {

    switch(action.type) {

        case CALC_INT:

            //convert input values to floats
            const principal = parseFloat(action.principal);
            const rate = parseFloat(action.rate)/100; //account for % conversion
            const years = parseFloat(action.years);

            //ensure no NaN
            if (principal && rate && years){

                //calculate final value
                const final = principal * (1 + (rate*years));

                return {
                    ...state,
                    final: final,
                    gained: final-principal,
                }
            }
            //otherwise reset
            return initialState;

        default:
            return state;
    }
}