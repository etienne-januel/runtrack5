import React, { Component } from 'react';
import AmazingNumberButton from './AmazingNumberButton';
import BeautifullScreen from './BeautifullScreen';
import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton';

import './calculator.css';

/* Le component principal, il sera composée des
components ci-dessus, entre autre. */
class Calculator extends Component {
    
    state = {
        displayedNumber: '0',
        operatedNumber: '0',
        operatingNumber: 'null',
        operatorSymbol: 'null',
        result: 'null',
    }

    updateDisplay = () => {
        if(this.state.result !== 'null') {
            this.setState({
                displayedNumber: this.state.result
            })
        }
        const displayedNumber = (this.state.operatedNumber)

        this.setState({
            displayedNumber
        })
    }

    pressKey = (e) => {
        switch(e.target.textContent) {
            case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
                switch(this.state.operatingNumber) {
                    case 'null':
                        if(this.state.operatedNumber == '0') {
                            this.setState({
                                operatedNumber: e.target.textContent
                            })
                        } else {
                            this.setState({
                                operatedNumber: this.state.operatedNumber + e.target.textContent
                            })
                        }
                    break;

                    default:
                        if(this.state.operatingNumber == '0') {
                            this.setState({
                                operatingNumber: e.target.textContent
                            })
                        } else {
                            this.setState({
                                operatingNumber: this.state.operatingNumber + e.target.textContent
                            })
                        }
                    break;
                }
            break;

            case '.':
                if(this.state.operatedNumber.indexOf('.') > -1) {
                    return;
                } else {
                    this.setState({
                        operatedNumber: this.state.operatedNumber + e.target.textContent
                    })
                }
            break;

            case '+': case '-': case '/': case 'x':
                if(this.state.operatingNumber == 'null'){
                    this.setState({
                        operatingNumber: '0'
                    })
                }

                if (document.querySelector('.key-operator--selected')) {
                    document.querySelector('.key-operator--selected').classList.toggle('key-operator--selected');
                }
                e.target.classList.toggle('key-operator--selected');

                if (e.target.textContent == 'x') {
                    this.setState({
                        operatorSymbol: '*'
                    })
                } else {
                    this.setState({
                        operatorSymbol: e.target.textContent
                    })
                }
            break;

            case '=':
                switch(this.state.operatorSymbol) {
                    case 'null': 
                    return
                    case '/':
                        console.log(this.state.operatedNumber + this.state.operatorSymbol + this.state.operatingNumber)
                        this.setState({
                            displayedNumber: Number(this.state.operatedNumber) / Number(this.state.operatingNumber)
                        })
                    break;
                    case '*':
                        this.setState({
                            displayedNumber: Number(this.state.operatedNumber) * Number(this.state.operatingNumber)
                        })
                    break;
                    case '-':
                        this.setState({
                            displayedNumber: Number(this.state.operatedNumber) - Number(this.state.operatingNumber)
                        })
                    break;
                    case '+':
                        this.setState({
                            displayedNumber: Number(this.state.operatedNumber) + Number(this.state.operatingNumber)
                        })
                    break;
                }
                console.log(this.state.operatedNumber + this.state.operatorSymbol + this.state.operatingNumber)
                console.log(this.state.displayedNumber)
            break;
        }
    }

    render() {
        return (
            <div onClick={this.updateDisplay} className="calculator">
                <BeautifullScreen display={this.state.displayedNumber}/>
                <div className="container-flex container-row">
                    <AmazingNumberButton pressKey={this.pressKey} />
                    <GreatOperationButton pressKey={this.pressKey} />
                </div>
                <MagnificientEqualButton pressKey={this.pressKey} />
            </div>
        )
    }
}

export default Calculator;