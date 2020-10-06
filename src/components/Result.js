import React from 'react';
import {connect} from 'react-redux';

const Result = (props) => {
    return (
        <>
            <p>Earned: ${props.gained}</p>
            <p>Total: ${props.final}</p>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        final: state.final,
        gained: state.gained,
    }
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Result);