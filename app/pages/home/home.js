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

		var diameter = input / Math.PI;
		var vars = {};

		if (input > 1) {
			vars['Omkrets'] = input;
			vars['Diameter'] = vars['Omkrets'] / Math.PI;
			vars['Riktskärsdjup'] = vars['Diameter'] * 0.2;
			vars['Brytmånslängd'] = vars['Diameter'] * 0.8;
			vars['Brytmånsbredd'] = Math.min(vars['Diameter'] * 0.1, 3);

		}

		for (var name in vars)
			vars[name] = parseFloat(vars[name].toPrecision(2));

		console.log(vars);
		this.setState({vars:vars})
	}

	renderResult() {
/*
*/

		var A = <h3>-</h3>;
		var B = <h3>-</h3>;

		if (this.state.vars['Riktskärsdjup'] > 0)
			A = <h3>{this.state.vars['Riktskärsdjup']}</h3>;

		if (this.state.vars['Brytmånslängd'] > 0 && this.state.vars['Brytmånsbredd'] > 0)
			B = <h3>{this.state.vars['Brytmånslängd']} x {this.state.vars['Brytmånsbredd']}</h3>

		return (
			<ListGroup>
				<ListGroupItem header="Riktskärsdjup (cm)">
					{A}
				</ListGroupItem>
				<ListGroupItem header="Längd och bredd på brytmån (cm)">
					{B}
				</ListGroupItem>
			</ListGroup>
		);
	}
	render() {

		var rootStyle = {};
		rootStyle.padding = '1em';

		return (
			<div id='home' style={rootStyle}>
				<div style={{textAlign:'center'}}>
					<img width='300px' src={require('./images/logo.png')}/>
				</div>

				<div style={{paddingTop:'1em', paddingBottom:'1em', fontSize:'150%'}}>
					<FormControl type='text' placeholder='Ange omkretsen på trädet' value={this.state.vars['Omkrets']} onChange={this.onChange} style={{fontSize:'inherit'}} >
					</FormControl>
				</div>
				<div>
					{this.renderResult()}
				</div>
				<div style={{textAlign:'center'}}>
					<img height='180px' src={require('./images/tree.png')}/>
				</div>
			</div>
		);
	}

};
