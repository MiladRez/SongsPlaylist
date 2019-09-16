import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App.js';
import reducers from './reducers';

// Provider component takes whatever is in the state and stores it in a prop called 'store' using createStore function
ReactDOM.render(
    <Provider store = {createStore(reducers)}>
        <App />
    </Provider>, 
    document.querySelector('#root')
);