import {React, useState, useEffect} from 'react';

const productos = [
    {id:1,nombre: "Torta Oreo", precio:3000, stock: 10 },
    {id: 2 ,nombre: "Chocoreo",  precio:2900, stock: 5},
    {id: 6,nombre: "Marquise Clásica", precio:2800, stock: 5},
    {id: 8,nombre: "Marquise Frutillas", precio:3700, stock: 2}
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

    useEffect(() => {
        consultarPromesa(true)
    .then(data => {
        const productosJSX = data.map((producto, indice) => {

            <div className="card border-primary mb-3" id={indice} style={{maxWidth: '15rem', margin: "5px"}}>
            <div className="card-header">{producto.nombre}</div>
            <div className="card-body">
              <h4 className="card-title">Precio: ${producto.precio}</h4>
              <p className="card-text">Stock: {producto.stock}</p>
            </div>
          </div>
          

        }) 
        setProductos(productosJSX)
        console.log(productos) 
    })
    .catch(error => {
        console.error(error)
    })
    }, [input]);   

    return (
        <div className="row">
            {productos}
        </div>
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