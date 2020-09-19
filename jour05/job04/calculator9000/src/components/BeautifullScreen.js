import React from 'react';

/* Sera un Component représentant l'écran d’affichage de votre Calculator9000. 
Il doit afficher différentes choses telles que l'état du calcul en cours et le resultat. */
const BeautifullScreen = ({display, pressKey}) => {
    return(
        <div className="container-flex container-row screen-container">
            <div className="screen"><span className="result">{display}</span></div>
            <div onClick={pressKey} className="key key-reset">C</div>
        </div>
    )
}

export default BeautifullScreen;