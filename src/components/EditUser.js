import React from 'react'
import {useForm} from 'react-hook-form'


const EditUser = (props) =>{
    

    const {register, errors, handleSubmit, setValue} = useForm({
        defaultValues: props.currentUser  //recibe los valores por defecto que va a tener el form
    });

    setValue ('name', props.currentUser.name)  //si cambia name se actualiza
    setValue ('username', props.currentUser.username) // si cambia username se actualiza

    const onSubmit = (data,e) =>{
        data.id = props.currentUser.id

        props.updateUser(props.currentUser.id, data)   //recibe como param. el id y data que viene de los input

       
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

                  <button>Edit user</button>

               </form>
            )

}
export default EditUser