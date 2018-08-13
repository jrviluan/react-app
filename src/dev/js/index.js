//import React from 'react';
//import ReactDOM from 'react-dom';
//import {Provider} from 'react-redux';
//import User from '../../components/Users'
import {createStore} from 'redux';
import allReducers from './reducers';

const store = createStore(allReducers);

//ReactDOM.render(
//    <Provider store={store}>
//        <User/>
//    </Provider>
//, document.getElementById('root'));