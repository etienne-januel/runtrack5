import React from 'react';

//Un component simple qui servira a représenter les touches numériques du Calculator9000.
const AmazingNumberButton = ({pressKey}) => {
    
    return(
        <div className="container-flex container-column container-digits">
            <div className="container-flex container-row">
                <div onClick={pressKey} className="key key-digits">7</div>
                <div onClick={pressKey} className="key key-digits">8</div>
                <div onClick={pressKey} className="key key-digits">9</div>
            </div>
            <div className="container-flex container-row">
                <div onClick={pressKey} className="key key-digits">4</div>
                <div onClick={pressKey} className="key key-digits">5</div>
                <div onClick={pressKey} className="key key-digits">6</div>
            </div>
            <div className="container-flex container-row">
                <div onClick={pressKey} className="key key-digits">1</div>
                <div onClick={pressKey} className="key key-digits">2</div>
                <div onClick={pressKey} className="key key-digits">3</div>
            </div>
            <div className="container-flex container-row">
                <div onClick={pressKey} className="key key-zero key-digits">0</div>
                <div onClick={pressKey}className="key key-dot key-digits">.</div>
            </div>
        </div>
    )
}

export default AmazingNumberButton;