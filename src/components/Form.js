import React from 'react';
import {connect} from 'react-redux';
import {calcIntSimple, calcIntCompound} from '../redux/actions';

//component to accept calculation inputs
class Form extends React.Component {

    constructor (props) {

        super(props);

        //component will manage state of inputs
        this.state = {
            principal: '',
            rate: '',
            years: '',
            times: '',
            selected: 'simple',
        }
    }

    //dispatch event to redux whenever state changes
    componentDidUpdate = (_prevProps, prevState) => {
        switch(this.state.selected) {
            case 'simple':
                this.props.calcIntSimple(this.state.principal, this.state.rate, this.state.years);
                break;
            case 'compound':
                this.props.calcIntCompound(this.state.principal, this.state.rate, this.state.years, this.state.times);
                break;
            default:
                return;
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

    handleSelect = (event) => {
        this.setState({selected:event.target.value})
    }  

    render = () => {
        return (
            <>

                <p>
                    <select value={this.state.selected} onChange={this.handleSelect}>
                        <option value="simple">Simple Interest</option>
                        <option value="compound">Compound Interest</option>
                    </select>
                </p>
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

                {this.state.selected === 'compound' ?  (
                    <p>
                        <label>
                            Times Compounded (Per Year)
                            <input 
                                type='number' 
                                value={this.state.times}
                                onChange={this.genChangeHandler('times')}
                            />
                        </label>
                    </p>) 
                : null}
                
            </>
        );
    }
}

//form needs no redux state info
const mapStateToProps = null;

//form needs to dispatch input info to redux
const mapDispatchToProps = {calcIntSimple, calcIntCompound};

//connect to redux
export default connect(mapStateToProps, mapDispatchToProps)(Form);