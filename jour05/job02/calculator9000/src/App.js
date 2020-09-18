import React, { Component } from 'react';
import Calculator from './components/Calculator'
import './App.css';

/* Le component principal, il sera composée des components ci-dessus, entre autre. */
class App extends Component {
    render() {
        return (
            <Calculator />
        )
    }
}

export default App;