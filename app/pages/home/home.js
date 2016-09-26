import React from 'react';
import {Jumbotron, Button, Grid, Row, Col, ListGroup, ListGroupItem, FormControl, ControlLabel, PageHeader} from 'react-bootstrap';
import {sprintf, extend, isString, isObject, isArray, isNumber} from 'yow';

require('./home.less');



module.exports = class Page extends React.Component {


	constructor(props) {

		super(props);

		this.state = {};
		this.state.vars = {};
		this.onChange = this.onChange.bind(this);
	};


	onChange(event) {
		var input = parseInt(event.target.value);

		if (isNaN(input))
			input = '';

		var vars = {};

		if (input != '' && isNumber(input)) {
			vars['Omkrets'] = input;
			vars['Diameter'] = vars['Omkrets'] / Math.PI;
			vars['Riktskärsdjup'] = vars['Diameter'] * 0.2;
			vars['Brytmånslängd'] = vars['Diameter'] * 0.8;
			vars['Brytmånsbredd'] = Math.min(vars['Diameter'] * 0.1, 3);

		}

		for (var name in vars)
			vars[name] = parseFloat(vars[name].toPrecision(2));

		vars['Omkrets'] = input;

		this.setState({vars:vars})
	}

	renderTree() {

		var image = require('./images/tree.png');
/*
		if (isNumber(this.state.vars['Brytmånsbredd'])) {
			image = require('./images/tree-down.png');
		}
		else {

			image = require('./images/tree-up.png');
		}
*/
		return (
			<div style={{textAlign:'center'}}>
				<img height='180px' src={image}/>
			</div>

		);


	}

	renderResult() {

		var A = <h3>-</h3>;
		var B = <h3>-</h3>;


		if (this.state.vars['Riktskärsdjup'] > 0)
			A = <h3>{this.state.vars['Riktskärsdjup']} cm</h3>;

		if (this.state.vars['Brytmånslängd'] > 0 && this.state.vars['Brytmånsbredd'] > 0)
			B = <h3>{this.state.vars['Brytmånslängd']} cm x {this.state.vars['Brytmånsbredd']} cm</h3>

		var listItemStyle = {};
		listItemStyle.backgroundColor = 'hsl(220, 50%, 50%)';
		listItemStyle.backgroundColor = 'hsla(218, 50%, 50%, 0.05)';

		return (
			<ListGroup>
				<ListGroupItem style={listItemStyle} header="Riktskärets djup">
					{A}
				</ListGroupItem>
				<ListGroupItem style={listItemStyle} header="Längd och bredd på brytmån">
					{B}
				</ListGroupItem>
			</ListGroup>
		);
	}
	render() {

		var rootStyle = {};
		rootStyle.padding  = '1em';
		rootStyle.position = 'absolute';
		rootStyle.left     = 0;
		rootStyle.top      = 0;
		rootStyle.right    = 0;
		rootStyle.bottom   = 0;

		return (
			<div id='home' style={rootStyle}>
				<div style={{textAlign:'center'}}>
					<img width='300px' src={require('./images/logo.png')}/>
				</div>

				<div style={{paddingTop:'1em', paddingBottom:'1em', fontSize:'150%'}}>
					<FormControl type='text' placeholder='Ange omkretsen på trädet här!' value={this.state.vars['Omkrets']} onChange={this.onChange} style={{fontSize:'inherit'}} >
					</FormControl>
				</div>
				<div>
					{this.renderResult()}
				</div>
				{this.renderTree()}
			</div>
		);
	}

};
