import React, { useEffect, useState } from "react";
import '../main.css'
import Funciones from "./Funciones";

const Table = ({setEditin, setUserEdit}) => {

    const [pintar, setPintar] = useState([])

    

    useEffect(() => {
       
        const arri = JSON.parse(window.localStorage.getItem("datos"));
        
        setPintar(arri)
        
            },[]);
   

            const handleDelete = (id) => {
        
                let DatosActual = JSON.parse(window.localStorage.getItem("datos"))
                const TransaccionIndex = DatosActual.findIndex(element => element.id === id)
                console.log(TransaccionIndex)
                DatosActual.splice(TransaccionIndex, 1)

                window.localStorage.setItem("datos", JSON.stringify(DatosActual))
                window.location.reload()
            }

            const handleEdit = (id) => {
                
                const usuario = pintar.filter(usr => usr.id === id)
                setUserEdit(usuario)
                setEditin(true)
                
                


                
            }

    return (
    <div className="About-Table">

        {pintar.map((v) => 
        <table class="table ">
      
        <tbody>
            <tr>
            <th scope="row">{v.id}</th>
            <td>{v.nombre}</td>
            <td>{v.apellido}</td>
            <td>{v.telefono}</td>
            <td>{v.direccion}</td>
            
            <button onClick={() => handleEdit(v.id)} className="bg-warning editar">Editar</button>
            <button onClick={() => handleDelete(v.id)} className="bg-danger eliminar">Eliminar</button>
            </tr>
            
        </tbody>
        </table>
        )}


    </div>
    )
}

export default Table