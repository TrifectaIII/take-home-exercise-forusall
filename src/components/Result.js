import React from 'react';
import {connect} from 'react-redux';

//component to display result of calculations
const Result = (props) => {

    //only render if there is a result to display
    if (props.final) {

        //round results to nearest cent
        return (
            <>
                <p>Earned: <b>${round(props.gained,2)}</b></p>
                <p>Total: <b>${round(props.final,2)}</b></p>
            </>
        );
    }
    return null;
}

//access results of calculations from redux state
const mapStateToProps = (state) => {
    return {
        final: state.final,
        gained: state.gained,
    }
};

//result doesnt dispatch anything to redux
const mapDispatchToProps = null;

//connect to redux 
export default connect(mapStateToProps, mapDispatchToProps)(Result);


//helper function to round numbers without using .toFixed
function round(value, precision) {
    var multiply = Math.pow(10, precision || 0);
    return Math.round(value * multiply) / multiply;
}