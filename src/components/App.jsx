import React from 'react';
import "./App.css";
import Navbar from './NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';

const App = () => {
    return (
        <div>
            <Navbar/>
            <ItemListContainer/>
        </div>
    );
}

export default App;
