import {React, useState, useEffect} from 'react';

const productos = [
    {nombre: "Torta Oreo", numero: 1, precio:3000, stock: 10 },
    {nombre: "Chocoreo", numero: 2 , precio:2900, stock: 5},
    {nombre: "Marquise Clásica", numero: 6, precio:2800, stock: 5},
    {nombre: "Marquise Frutillas", numero: 8, precio:3700, stock: 2}
]

function consultarPromesa(confirmacion) {
    return new Promise  ((res, rej) => {
        if (confirmacion) {
            res (productos) 
        } else {
            rej ("Acceso denegado")
        }
    }
})



const Productos = () => {

    const [productos, setProductos] = useState([]);


    consultarPromesa(true)
    .then(data => {
        const productosJSX = data.map((producto, indice) => {
            
        }) 
        setProductos(data)
    })
    .catch(error => {
        console.error(error)
    })
    
    console.log(productos) 

    return (
        <>
            {productos}
        </>
    );
}


export default Productos;

/* <div className="card border-primary mb-3" style={{maxWidth: '20rem'}}>
  <div className="card-header">Header</div>
  <div className="card-body">
    <h4 className="card-title">Primary card title</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */