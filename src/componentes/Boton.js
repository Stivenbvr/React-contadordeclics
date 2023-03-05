
import React from 'react';
import '../componentes/css/Boton.css';

function Boton({texto, esBotonDeClic, manejarClic}){
    return (
        <button className={esBotonDeClic ? 'boton-clic' : 'boton-reinciar'}
            onClick={manejarClic}>
            {texto}
        </button>
    );
}

export default Boton;
