import {CALC_INT_SIMPLE, CALC_INT_COMPOUND} from './actionTypes';

//initial state of reducer
const initialState = {
    final: null,
    gained: null,
}

export default (state = initialState, action) => {

    var principal;
    var rate;
    var years;
    var times; 

    switch(action.type) {

        //simple interest
        case CALC_INT_SIMPLE:

            //convert input values to floats
            principal = parseFloat(action.principal);
            rate = parseFloat(action.rate)/100; //convert from % to decimal
            years = parseFloat(action.years);

            //ensure no NaN or 0
            if (principal && rate && years){

                //calculate final value using simple interest formula
                const final = principal * (1 + (rate*years));

                return {
                    ...state,
                    final: final,
                    //gained is delta between principal and final amounts
                    gained: final-principal,
                }
            }
            
            //otherwise reset
            return initialState;

        //compound interest
        case CALC_INT_COMPOUND:

            //convert input values to floats
            principal = parseFloat(action.principal);
            rate = parseFloat(action.rate)/100; //convert from % to decimal
            years = parseFloat(action.years);
            times = parseFloat(action.times);

            //ensure no NaN or 0
            if (principal && rate && years && times){

                //calculate final value using compound interest formula
                const final = principal * (1 + (rate/times))**(times*years);

                return {
                    ...state,
                    final: final,
                    //gained is delta between principal and final amounts
                    gained: final-principal,
                }
            }
            
            //otherwise reset
            return initialState;

        default:
            return state;
    }
}