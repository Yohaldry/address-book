import Header from '../Components/Headers'
import Formulario from '../Components/Formulario'
import Table from '../Components/Table'
import '../main.css'
import React, {useEffect, useState} from 'react'
import { v4 as uuidv4} from 'uuid'
import axios from 'axios'
import Funciones from '../Components/Funciones'
import FormEdit from '../Components/FormEdit'

function App() {
  
  const [editin, setEditin] = useState(false)

  const [userEdit, setUserEdit] = useState([])
 
  return (
    <div>
      <Header />
        <div className='About-Principal'>

        {
          editin ?(
            <div>
              <FormEdit userEdit={userEdit}/>
              </div>
          ) : (
            <div>
            <Formulario />
            </div>
          )
        }

        
        <Table setUserEdit={setUserEdit} setEditin={setEditin}/>
        
        <Funciones />
        </div>
    </div>
  );
}

export default App;
