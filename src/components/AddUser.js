import React from 'react'
import {useForm} from 'react-hook-form'


const AddUser = (props) =>{

    const {register, errors, handleSubmit} = useForm();


    const onSubmit = (data,e) =>{

        props.newUser(data) //le mando como data lo que cargue en este form a la funcion de estado de addUser
        e.target.reset()

    }


    return (
               <form onSubmit={handleSubmit(onSubmit)}>

           

                  <label>Name</label>
                  <input type="text" name="name" ref={  register({

                        required: {value: true , message: 'Campo obligatorio'},
                        maxLength: {value: 10 , message: 'No se permiten mas de 10 caracteres'}
                  })}
                  
                  
                  />

                   <div>
                      {errors?.name?.message}
                   </div>
            


                  <label>Username</label>
                  <input type="text" name="username" ref={  register({

                    required: {value: true , message: 'Campo obligatorio'},
                    maxLength: {value: 15 , message: 'No se permiten mas de 15 caracteres'}
                    })}
                  
                  
                  />

                  <div>
                      {errors?.username?.message}
                  </div>

                  <button>Add new user</button>

               </form>
            )

}
export default AddUser