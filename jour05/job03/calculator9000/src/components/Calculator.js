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
    }

    // updateDisplay = () => {
    //     if(this.state.result !== 'null') {
    //         this.setState({
    //             displayedNumber: this.state.result
    //         })
    //     }
    //     const displayedNumber = (this.state.operatedNumber)

    //     this.setState({
    //         displayedNumber
    //     })
    // }

    pressKey = (e) => {
        let result;
        switch(e.target.textContent) {
            //Si la key est un chiffre
            case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
                switch(this.state.operatorSymbol) {
                    //Si le symbole d'opération n'a pas été défini par l'utilisateur
                    case 'null':
                        //Si l'opéré n'a pas été défini on écrase l'opéré
                        if(this.state.operatedNumber == '0') {
                            this.setState({
                                operatedNumber: e.target.textContent,
                                displayedNumber: e.target.textContent
                            })
                        //Si l'opéré a déjà été défini on concatene l'opéré
                        } else {
                            this.setState({
                                operatedNumber: this.state.operatedNumber + e.target.textContent,
                                displayedNumber: this.state.operatedNumber + e.target.textContent
                            })
                        }
                    break;
                    //Si le symbole d'opération a déjà été défini
                    default:
                        //Si l'opérant n'a pas été défini on écrase l'opérant
                        if(this.state.operatingNumber == '0') {
                            this.setState({
                                operatingNumber: e.target.textContent,
                                displayedNumber: e.target.textContent
                            })
                        //Si l'opérant a déjà été défini on concatene l'opérant
                        } else {
                            this.setState({
                                operatingNumber: this.state.operatingNumber + e.target.textContent,
                                displayedNumber: this.state.operatingNumber + e.target.textContent
                            })
                        }
                    break;
                }
            break;

            //Si la key est une virgule
            case '.':
                console.log("yo")
                //Si l'opérant est déjà défini
                if(this.state.operatingNumber !== 'null') {
                    console.log('operatingNumber')
                    if(! this.state.operatingNumber.indexOf('.') > -1) {
                        this.setState({
                            operatingNumber: this.state.operatingNumber + e.target.textContent,
                            displayedNumber: this.state.operatingNumber + e.target.textContent
                        })
                    } else {
                        console.log('exit1')
                        return;
                    }
                } else {
                    if(! this.state.operatedNumber.indexOf('.') > -1) {
                        this.setState({
                            operatedNumber: this.state.operatedNumber + e.target.textContent,
                            displayedNumber: this.state.operatedNumber + e.target.textContent
                        })
                    } else {
                        console.log('exit2')
                        return;
                    }
                }
            break;

            //Si la key est un symbole d'opération
            case '+': case '-': case '/': case 'x':
                //Si l'opérant n'a pas été défini on écrase l'opérant
                if(this.state.operatingNumber == 'null'){
                    this.setState({
                        operatingNumber: '0'
                    })
                }
                
                //Si un élément possède déjà la classe selected on lui retire avant d'ajouter le nouveau
                if (document.querySelector('.key-operator--selected')) {
                    document.querySelector('.key-operator--selected').classList.toggle('key-operator--selected');
                }

                e.target.classList.toggle('key-operator--selected');

                //Si la key est x alors on traduit par * avant d'écraser le symbole
                if (e.target.textContent == 'x') {
                    this.setState({
                        operatorSymbol: '*'
                    })
                //Sinon on écrase directement le symbole
                } else {
                    this.setState({
                        operatorSymbol: e.target.textContent
                    })
                }
            break;

            //Si la key est un =
            case '=':
                switch(this.state.operatorSymbol) {
                    //Si le symbole d'opération n'a pas été défini on exit
                    case 'null': 
                    return

                    //Si le symbole est un /
                    case '/':
                        result = (Number(this.state.operatedNumber) / Number(this.state.operatingNumber)).toString()
                    break;

                    //Si le symbole est un *
                    case '*':
                        result = (Number(this.state.operatedNumber) * Number(this.state.operatingNumber)).toString()
                    break;

                    //Si le symbole est un -
                    case '-':
                        result = (Number(this.state.operatedNumber) - Number(this.state.operatingNumber)).toString()
                    break;

                    //Si le symbole est un +
                    case '+':
                        result = (Number(this.state.operatedNumber) + Number(this.state.operatingNumber)).toString()
                    break;
                }
                if (document.querySelector('.key-operator--selected')) {
                    document.querySelector('.key-operator--selected').classList.toggle('key-operator--selected');
                }
                this.setState({
                    displayedNumber: result,
                    operatedNumber: result,
                    operatingNumber: 'null',
                    operatorSymbol: 'null',
                    result,                    
                })
            break;

            case 'C':
                if (document.querySelector('.key-operator--selected')) {
                    document.querySelector('.key-operator--selected').classList.toggle('key-operator--selected');
                }
                this.setState({
                    displayedNumber: '0',
                    operatedNumber: '0',
                    operatingNumber: 'null',
                    operatorSymbol: 'null',
                    result: 'null',
                })
            break;
        }
    }

    render() {
        return (
            <div className="calculator">
                <BeautifullScreen pressKey={this.pressKey} display={this.state.displayedNumber}/>
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