import React from 'react';
import {connect} from 'react-redux';

const Result = (props) => {
    if (props.final) {
        return (
            <>
                <p>Earned: <b>${round(props.gained,2)}</b></p>
                <p>Total: <b>${round(props.final,2)}</b></p>
            </>
        );
    }
    return (<></>);
}

const mapStateToProps = (state) => {
    return {
        final: state.final,
        gained: state.gained,
    }
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Result);

//helper function to round numbers without using .toFixed
function round(value, precision) {
    var multiply = Math.pow(10, precision || 0);
    return Math.round(value * multiply) / multiply;
}