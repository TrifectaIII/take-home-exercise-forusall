import {CALC_INT} from './actionTypes';

const initialState = {
    final: '',
    gained: '',
}

export default (state = initialState, action) => {

    switch(action.type) {
        case CALC_INT:

            const principal = parseFloat(action.principal);
            const rate = parseFloat(action.rate)/100; //account for % conversion
            const years = parseFloat(action.years);

            //ensure all numbers
            if (principal && rate && years){
                const final = principal * (1 + (rate*years));
                return {
                    ...state,
                    final,
                    gained: final-principal,
                }
            }
            //otherwise reset
            return initialState;

        default:
            
            return state;
    }
}