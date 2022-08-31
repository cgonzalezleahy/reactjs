import './App.css';
import React from 'react';
import Forms from './Forms';
import CartWidget from './CardWidget';



const Navbar = () => {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
        <div className="collapse navbar-collapse" id="navbarColor02">
                
                <Forms contBuscar ="Productos" />
                {/* <Forms contBuscar ="Productos" /> */}
                <CartWidget/>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default Navbar;




