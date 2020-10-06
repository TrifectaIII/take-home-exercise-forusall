import React from 'react';
import {connect} from 'react-redux';
import {calcInt} from '../redux/actions';

//component to accept calculation inputs
class Form extends React.Component {

    constructor (props) {

        super(props);

        //component will manage state of inputs
        this.state = {
            principal: '',
            rate: '',
            years: '',
        }
    }

    //dispatch event to redux whenever state changes
    componentDidUpdate = (_prevProps, prevState) => {
        if (prevState !== this.state) {
            this.props.calcInt(this.state.principal, this.state.rate, this.state.years);
        }
    }

    //returns function to handle changes of given state key
    genChangeHandler = (key) => {
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
                            onChange={this.genChangeHandler('principal')}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Annual Interest Rate (%)
                        <input 
                            type='number' 
                            value={this.state.rate}
                            onChange={this.genChangeHandler('rate')}
                        />
                    </label>
                </p>
                
                <p>
                    <label>
                        Time (Years)
                        <input 
                            type='number' 
                            value={this.state.years}
                            onChange={this.genChangeHandler('years')}
                        />
                    </label>
                </p>
            </>
        );
    }
}

//form needs no redux state info
const mapStateToProps = null;

//form needs to dispatch input info to redux
const mapDispatchToProps = {calcInt};

//connect to redux
export default connect(mapStateToProps, mapDispatchToProps)(Form);