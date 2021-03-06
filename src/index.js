import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import fieldReducer from './fieldReducer';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

const reducers = combineReducers({
    field: fieldReducer
});

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App initialValue="ixi" />
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
