import React from 'react';
import {connect} from 'react-redux';
import {setPrincipal, setRate, setYears} from '../redux/actions';

class Form extends React.Component {

    handlePrincipal = (event) => {

    }

    handleRate = (event) => {

    }

    handleYears = (event) => {
        
    }

    render = () => {
        return (
            <div>
                <label>
                    Principal ($)
                    <input 
                        type='number' 
                        value={this.props.principal} 
                        onChange={this.handlePrincipal}
                    />
                </label>
                <br/><br/>
                <label>
                    Rate (%)
                    <input 
                        type='number' 
                        value={this.props.rate}
                        onChange={this.handleRate}
                    />
                </label>
                <br/><br/>
                <label>
                    Time (Years)
                    <input 
                        type='number' 
                        value={this.props.years}
                        onChange={this.handleYears}
                    />
                </label>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        principal: state.principal,
        rate: state.rate,
        years: state.years,
    }
};

const mapDispatchToProps = {setPrincipal, setRate, setYears};

export default connect(mapStateToProps, mapDispatchToProps)(Form);