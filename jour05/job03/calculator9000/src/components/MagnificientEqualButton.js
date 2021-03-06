import React from 'react';

/* Ce component-ci devra être le plus beau de
tous puisqu’il représentera la touche “=” du Calculator9000 qui est le
meilleur bouton. */
const MagnificientEqualButton = ({pressKey}) => {
    return(
        <div onClick={pressKey} className="key key-result">=</div>
    )
}

export default MagnificientEqualButton;