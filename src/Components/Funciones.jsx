import React, {useEffect, useState} from "react";
import '../main.css'
import axios from 'axios'

const Funciones = () => {

    const [valores, setValores] = useState([])
    

    useEffect(() => {

            if(JSON.parse(window.localStorage.getItem("contador")) === null){

                window.localStorage.setItem("contador", 58);    
            }

      
            if(JSON.parse(window.localStorage.getItem("datos")) === null){

                axios.get(" https://618aac0d34b4f400177c480e.mockapi.io/api/v1/contactos")
                .then(res => {
                    const data = res.data;
                    window.localStorage.setItem("datos", JSON.stringify(data));
                    localStorageTraer()
                        
                });     
            }
    },[]);

  
  
    const localStorageTraer = () => {
  
            let ListaTotal = JSON.parse(window.localStorage.getItem("datos")) 
            setValores(ListaTotal)
            
    }

            
   
    return (
        <div>
         
        </div>
        )
}
 
    export default Funciones
    

   
    
 