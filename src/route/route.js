import React from 'react'
import { Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from '../App'
import Home from '../components/home'
import Topic from "../containers/topic"

 const RouterConfig = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
             <IndexRoute  component={Home}></IndexRoute>
             <Route path="/tab/:tab" component={Home}></Route>
             <Route path="/t/:id" component={Topic}></Route>
        </Route>
    </Router>
);

export default RouterConfig;