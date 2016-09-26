import React from 'react';
import {Jumbotron, Button, Grid, Row, Col, ListGroup, ListGroupItem, PageHeader} from 'react-bootstrap';
import {extend, isString, isObject, isArray} from 'yow';

import {sprintf} from 'yow';

require('./about.less');


module.exports = class Page extends React.Component {


	constructor(...args) {

		super(...args);

		this.onClick = this.onClick.bind(this);
	};

	onClick() {
		window.history.back();
	}




	render() {

		return (
			<Grid className='about' style={{fontSize:'14px'}}>

			</Grid>
		);
	}

};
