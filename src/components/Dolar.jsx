import React, {useState, useEffect} from 'react';

const Dolar = () => {
    const [dolar, setDolar] = useState({});

    useEffect(() => {
       fetch('https://criptoya.com/api/dolar')
       .then(response => response.json)
       .then(({}) => {
            console.log(dolar)
       })
    }, [{}]);

    return (
        <>
            
        </>
    );
}

export default Dolar;

