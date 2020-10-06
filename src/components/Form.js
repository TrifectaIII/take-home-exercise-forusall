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

    componentDidUpdate = (_prevProps, prevState) => {
        if (prevState !== this.state) {
            this.props.calcInt(this.state.principal, this.state.rate, this.state.years);
        }
    }

    //returns function to handle changes of given state key
    handleChange = (key) => {
        return ((event) => {
            let changes = {};
            changes[key] = event.target.value;
            this.setState(changes);
        })
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
                            onChange={this.handleChange('principal')}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Annual Interest Rate (%)
                        <input 
                            type='number' 
                            value={this.state.rate}
                            onChange={this.handleChange('rate')}
                        />
                    </label>
                </p>
                
                <p>
                    <label>
                        Time (Years)
                        <input 
                            type='number' 
                            value={this.state.years}
                            onChange={this.handleChange('years')}
                        />
                    </label>
                </p>
                
            </>
        );
    }
}

const mapStateToProps = null;

const mapDispatchToProps = {calcInt};

export default connect(mapStateToProps, mapDispatchToProps)(Form);