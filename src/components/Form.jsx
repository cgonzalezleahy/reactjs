
import React from 'react';

const Forms = ({boton}) => {
    return (
        <>
           <form className="d-flex">
                 <input className="form-control me-sm-2" type="text" placeholder={user.nombre} />
                 {boton}
            </form> 
        </>
    );
}

export default Forms;
