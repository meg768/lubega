import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, hashHistory, Router, Route} from 'react-router';

import {Navbar,  CollapsibleNav, NavItem, Nav, MenuItem, NavDropdown} from 'react-bootstrap';


require('../less/styles.less');
require('./app.less');


var App = React.createClass({
  render: function() {


    return (
		<div className='app'>
				{this.props.children}
    	</div>
    );
  }
})


ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={require('../pages/home/home.js')} />
			<Route path="home"       component={require('../pages/home/home.js')} />
			<Route path="about"      component={require('../pages/about/about.js')} />
		</Route>
	</Router>
), document.getElementById('app'))
