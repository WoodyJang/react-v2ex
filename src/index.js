import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Route from "./route/route"
import { Provider } from 'react-redux'
import { createStore ,applyMiddleware} from 'redux'
import reducer from "./reducer/reduce"
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(reducer,applyMiddleware(...middleware))

ReactDOM.render(
    <Provider store={store}>
        {Route} 
    </Provider>, 
    document.getElementById('root')
);

