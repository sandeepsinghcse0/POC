import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import {Provider, ReactReduxContext} from 'react-redux';
import statetree from './reducers/todo';
import {createStore} from 'redux';

const store = createStore(statetree);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
