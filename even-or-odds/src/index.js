import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/App';
import rootReducer from './reducers';
import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

console.log('store.getState()', store.getState())
console.log('store', store);

store.subscribe(() => console.log('store.getState()', store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

