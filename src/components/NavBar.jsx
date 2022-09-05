import './App.css';
import React from 'react';
import Forms from './Forms';
import CartWidget from './CardWidget';
import Boton from './Boton';



const Navbar = () => {
  console.log()
  const user = {nombre: "Catalina", direccion: "Valparaiso 123"}
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
    <div className="collapse navbar-collapse" id="navbarColor02">
                
                <Forms user ={<Boton/>} />
                {/* <Forms contBuscar ="Productos" /> */}
                <CartWidget/>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default Navbar;





