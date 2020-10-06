import React from 'react';
import {connect} from 'react-redux';
import {calcInt} from '../redux/actions';

class Form extends React.Component {

    constructor (props) {

        super(props);

        this.state = {
            principal: '',
            rate: '',
            years: '',
        }
    }

    handlePrincipal = (event) => {
        this.setState({principal:event.target.value});
        this.props.calcInt(this.state.principal, this.state.rate, this.state.years);
    }

    handleRate = (event) => {
        this.setState({rate:event.target.value});
        this.props.calcInt(this.state.principal, this.state.rate, this.state.years);
    }

    handleYears = (event) => {
        this.setState({years:event.target.value});
        this.props.calcInt(this.state.principal, this.state.rate, this.state.years);
    }

    render = () => {
        return (
            <>
                <p>
                    <label>
                        Principal Amount ($)
                        <input 
                            type='number' 
                            value={this.state.principal} 
                            onChange={this.handlePrincipal}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Annual Interest Rate (%)
                        <input 
                            type='number' 
                            value={this.state.rate}
                            onChange={this.handleRate}
                        />
                    </label>
                </p>
                
                <p>
                    <label>
                        Time (Years)
                        <input 
                            type='number' 
                            value={this.state.years}
                            onChange={this.handleYears}
                        />
                    </label>
                </p>
                
            </>
        )
    }
}

const mapStateToProps = null;

const mapDispatchToProps = {calcInt};

export default connect(mapStateToProps, mapDispatchToProps)(Form);