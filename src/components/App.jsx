import {React, useState} from 'react';
import "./App.css";
import Navbar from './NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Productos from './Productos';


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
        <>
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
            <Productos/>
        </>
    );
}

export default App;
