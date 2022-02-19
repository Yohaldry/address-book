import React, { useState } from "react";
import '../main.css'

const FormEdit = ({userEdit}) => {
    console.log(userEdit)
    const [datosFormulario, setDatosformulario] = useState({

        id: window.localStorage.getItem("contador"),
        nombre:userEdit[0].nombre,
        apellido:userEdit[0].apellido,
        telefono:userEdit[0].telefono,
        direccion:userEdit[0].direccion
    })

    const handleInputChange = (event) => {
       
        setDatosformulario({
            ...datosFormulario,
            [event.target.name] : event.target.value
          
        })
    }

    const guardarEdit = (e) => {
       e.preventDefault()

        let DatosActual = JSON.parse(window.localStorage.getItem("datos"))
                const TransaccionIndex = DatosActual.findIndex(element => element.id === datosFormulario.id)
                console.log(TransaccionIndex)
                DatosActual.splice(TransaccionIndex, 1, datosFormulario)

                console.log(DatosActual)
                window.localStorage.setItem("datos", JSON.stringify(DatosActual))
                window.location.reload()
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
        
    }

    return (
    <div >
         <h1>Editar Usuario</h1>
             <form onSubmit={guardarEdit}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Nombre</label>
                <input value={datosFormulario.nombre} onChange={handleInputChange} name="nombre" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
            </div>

            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Apellido</label>
                <input value={datosFormulario.apellido} onChange={handleInputChange} name="apellido" type="text" className="form-control" id="exampleInputPassword1"/>
            </div>

            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Telefono</label>
                <input value={datosFormulario.telefono} onChange={handleInputChange} name="telefono" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
            </div>

            <div className="mb-3">
                <label  for="exampleInputEmail1" className="form-label">Direccion</label>
                <input value={datosFormulario.direccion}  onChange={handleInputChange} name="direccion" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
            </div>
            
            <button type="submit" className="btn btn-warning">Submit</button>
</form>   
    </div>
    )
}

export default FormEdit