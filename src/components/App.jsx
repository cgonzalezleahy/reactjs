import {React, useState} from 'react';
import "./App.css";
import Navbar from './NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';

const [cont, setCont]  = useState(0); 

function contador(operacion){
    if(operacion == "+"){
        setCont(cont + 1)
    } else {
        setCont(cont - 1)
    }
}

function saludar() {
    console.log("Hola")
}



const App = () => {
    return (
        <div>
            <Navbar/>
            <ItemListContainer texto ="Catalina"/>
            <p>
                Contador: {cont}
            </p>
            <button className='btn bnt-primary' onClick={() => contador ("+") }>
                +
            </button>
            <button className='btn bnt-secondary' onClick={() => contador ("-")}>
                -
            </button >
        </div>
    );
}

export default App;
