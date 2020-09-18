import React, { Component } from 'react';
import AmazingNumberButton from './AmazingNumberButton';
import BeautifullScreen from './BeautifullScreen';
import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton';

import './calculator.css';



/* Le component principal, il sera composée des
components ci-dessus, entre autre. */
class Calculator extends Component {
    render() {
        return (
            <div className="calculator">
                <BeautifullScreen />
                <div className="container-flex container-row">
                    <AmazingNumberButton />
                    <GreatOperationButton />
                </div>
                <MagnificientEqualButton />
            </div>
        )
    }
}

export default Calculator;