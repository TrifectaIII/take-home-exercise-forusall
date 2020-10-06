import {createStore} from 'redux';
import reducer from './reducer';

//redux store creation, using reducer
export default createStore(
    reducer, 
    //for redux devtools extension
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);