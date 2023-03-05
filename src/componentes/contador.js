import React from "react";
import './css/contador.css';

function Contador ({ numClics }){

    return (
        <div className='Contador'>
        
        { numClics }
        </div>
    );
}

export default Contador;