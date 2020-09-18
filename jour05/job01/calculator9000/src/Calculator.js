import React, { Component } from 'react';
import './Calculator.css';


class Calculator extends Component {

	theTitle = () => {
		return (
			<h1>Calculator9000</h1>
		)
	}

	render() {
		return this.theTitle();
	}
}

export default Calculator;
