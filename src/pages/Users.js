import React, { useState } from 'react'
import UserTable from '../components/UserTable'
import {v4 as uuidv4 } from 'uuid'
import AddUser from '../components/AddUser'
import EditUser from '../components/EditUser'

const User = () =>
{


    const usersData = [
        { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
        { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
        { id: uuidv4(), name: 'Ben', username: 'benisphere' },
      ]


     //State incial con el array cargado manualmente arriba
     const [users, setUser] = useState(usersData);

     //Agregar usuarios
     const addUser = (user)=>{  //recibe un user que es la data que cargamos en el form de AddUser.js
    

         user.id = uuidv4()  //crea un nuevo id
         setUser([...users, user]) //mantiene los objetos creados y agg. el nuevo que cargamos

    }

    //Eliminar usuarios
    const deleteUser = (id) =>{
        const arrayFilter = users.filter(user => user.id !== id)
       setUser(arrayFilter);
    }

    //Editar usuarios
    const [cambiarForm, setCambiarForm]= useState(false);

    const [currentUser, setCurrentUser] = useState({
        
        id: null, name: '', username: ''
    });

    const editUser = (user) =>{

        setCambiarForm(true) //cambia a true para que me aparezca el form editar

        setCurrentUser({  
            id: user.id, 
            name: user.name, 
            username: user.username
        })

    }

    const updateUser = (id, updateUser) =>{
        setCambiarForm(false)
        setUser(users.map(user => user.id === id ? updateUser : user )) //si el id coincide, me pinta el acualizado si no el por defecto

    }

    return(

    <div className="container">
          <h1>CRUD App with Hooks</h1>
             <div className="flex-row">
                <div className="flex-large">
                    {
                        cambiarForm ? (
                            <div>
                               <h2>Edit user</h2>
                               <EditUser currentUser={currentUser} updateUser={updateUser}/>
                            </div>
                        ):(
                            <div>
                                <h2>Add user</h2>
                                <AddUser newUser={addUser}/> 
                            </div>  

                        )
                    }
                
                
                </div>

                 <div className="flex-large">
                 <h2>View users</h2>
                  <UserTable 
                  users={users} 
                  delete={deleteUser}
                  editUser={editUser}
                
                  
                  />
                </div>
            </div>
    </div>

    )
}

export default User