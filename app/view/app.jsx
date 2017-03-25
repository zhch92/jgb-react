import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,IndexRoute, Link ,hashHistory} from 'react-router'

import Header from './components/header';
import Current from './current';
import Index from './index';
import Login from './login';
import Register from './register';
import Account from './account';
import Safe from './safe';
import HelpIdex from './help/index';
import HelpIdex1 from './help/index1';

import './stylesheet/global.scss';

export class Home extends Component {
    render() {
    	var hegitP={height:'100%'};
        return (
        	<div style={hegitP}> 
               <Header />
               {this.props.children}
        	</div>
        	)
    }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}>
      <IndexRoute component={Index} />
      <Route path="index" component={Index} />
      <Route path="current" component={Current} />
      <Route path="login" component={Login} />
      <Route path="register" component={Register} />
      <Route path="safe" component={Safe} />
      <Route path="account" component={Account} />
      <Route path="help/index" component={HelpIdex} />
      <Route path="help/index1" component={HelpIdex} />
    </Route>
  </Router>
) , document.getElementById('content'))



