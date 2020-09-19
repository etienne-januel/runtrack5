import React from 'react';

const ItsOverNineThousand = ({isDisplayed}) => {
    console.log(isDisplayed)
    if(isDisplayed) {
        return(
            <div className="container-flex container-row overNineThousand-container">
                <span className="overNineThousand">Its Over 9000!!!</span>
            </div>
        )
    } else {
        return(
            <div></div>
        )
    }
}

export default ItsOverNineThousand;