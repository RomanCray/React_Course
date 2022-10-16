import React from 'react';
import { useState, useEffect } from 'react';

export const Welcome = (noc) => {
    const [count, setCounter] = useState(0);    
    const [semaforo, setSemaforo] = useState(false);

    useEffect (()=> {
        console.log(semaforo);
    },[semaforo]);

    const contar = () => {
        setCounter(count + 1);
        setSemaforo(!semaforo);
    };

    const { message, name, ac1pt } = noc
    return (
        <div>
            <p>Hola, {name}</p>
            <p>{message} {ac1pt}</p>
            <h2>Contador de react</h2>
            <p className={semaforo ? 'verde': 'rojo'}>el semaforo esta en color {semaforo ? 'verde': 'rojo'}</p>
            <h3>Elumero de contador es {count}</h3>
            <button
                type="submit"
                onClick={contar}
                className="saludo">
                Sumar numeros
            </button>
        </div>
    );
}