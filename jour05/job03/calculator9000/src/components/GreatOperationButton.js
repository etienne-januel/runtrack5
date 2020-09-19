import React from 'react';

/* Le coeur et l'âme du Calculator9000 ... 
Ce component servira à représenter les boutons d'opérations telles que +, -, *, /. */
const GreatOperationButton = ({pressKey}) => {
    return(
        <div className="container-flex container-column operators">
            <div onClick={pressKey} className="key key-operators">/</div>
            <div onClick={pressKey} className="key key-operators">x</div>
            <div onClick={pressKey} className="key key-operators">-</div>
            <div onClick={pressKey} className="key key-operators">+</div>
        </div>
    )
}

export default GreatOperationButton;