import React, { useState } from "react";
import '../main.css'

const Formulario = () => {

    

    const [datosFormulario, setDatosformulario] = useState({

        id: window.localStorage.getItem("contador"),
        nombre:'',
        apellido:'',
        telefono:'',
        direccion:''
    })

    const handleInputChange = (event) => {
       
        setDatosformulario({
            ...datosFormulario,
            [event.target.name] : event.target.value
          
        })
    }
       

    const handleSubmit = () => {
        
        const arrayStorage = JSON.parse(window.localStorage.getItem("datos"))
        let contador = Number(window.localStorage.getItem("contador"))
        
        window.localStorage.setItem("contador", contador + 1) 
        arrayStorage.push(datosFormulario)

        const Transacion = JSON.stringify(arrayStorage)

        window.localStorage.setItem("datos", Transacion)
        console.log(arrayStorage)
        
    }

   

    return (
    <div >

        <h1>Formulario de Clientes</h1>
            
        <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Nombre</label>
                <input onChange={handleInputChange} name="nombre" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
            </div>

            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Apellido</label>
                <input onChange={handleInputChange} name="apellido" type="text" className="form-control" id="exampleInputPassword1"/>
            </div>

            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Telefono</label>
                <input onChange={handleInputChange} name="telefono" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
            </div>

            <div className="mb-3">
                <label  for="exampleInputEmail1" className="form-label">Direccion</label>
                <input  onChange={handleInputChange} name="direccion" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
            </div>
            
            <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
</form>


    </div>
    )
}

export default Formulario