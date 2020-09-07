import React, {Fragment, useState} from 'react'
import { useForm } from 'react-hook-form'  //libreria importada desde a dependencia para manejo de errores


const Form = () =>{

    const {register, errors, handleSubmit} = useForm();  //libreria hook form importada arriba

    //el type "name" en el form para relacionarlos tiene que iguales al estado de datos
    const [datos, setDatos]= useState ({  nombre: '',  apellido: ''  })

    //funcion estado que me guarda toda lainfo del form en un array
    const [entradas, setEntradas] = useState ([])   


   //FUNCION QUE ME CONTROLA LOS CAMBIOS EN LOS IMPUT

    const handleImputChange = (e) =>{

        setDatos({ ...datos,     // el ...datos es para guardar el campo anterior
            [e.target.name] : e.target.value    //guarda en name del form, el valor que yo le paso segun el input 
        })       
    }

    //FUNCION QUE ME MANDA LOS DATOS A LA CONSOLA Y AL ARRAY
    const onSubmit =(data,e) => {
       console.log(data);

       setEntradas([
           ...entradas, datos
       ])

       e.target.reset(); //evento que me borra automaticamente lo que escribi en el form
    }




    return(
        <Fragment>
            <h2>Formulario</h2>

            <form className="row" onSubmit={handleSubmit(onSubmit)}>

                <div className="col-md-3" >

                   <input 
                   placeholder="Ingrese nombre"
                   className="form-control"
                   name="nombre"
                   type= "text"
                   onChange={handleImputChange}  //espera algun cambio en los imput
                   ref={
                       register({  //manejo o control de errores
                           required: {value:true, message: 'Nombre Obligatorio'},
                           maxLength: {value: 10 , message: 'No se permiten mas de 10 caracteres'}

                       })}
                   
                   />
                   
                  { errors.nombre &&
                   <span className="text-danger text-small d-block mb-2"> 
                   {errors.nombre.message}  
                   </span>
                  }

                </div>

                <div className="col-md-3">

                    <input 

                    placeholder="ingrese apellido"
                    className="form-control"
                    name="apellido"
                    type="text"
                    onChange={handleImputChange}
                    ref={
                        register({
                            required: {value:true, message: 'Apellido Obligatorio'},
                            maxLength: {value: 15 , message: 'No se permiten mas de 15 caracteres'}
 
                        })}
                    
                    />

                   { errors.apellido &&
                   <span className="text-danger text-small d-block mb-2"> 
                   {errors.apellido.message}  
                   </span>
                  }

               </div> 

               <div className="col-md-3">

                   <button className="btn btn-primary" type="submit">Enviar</button>
                   

               </div>
                

            </form>

            <ul>
                {
                   entradas.map ( (item, index) => 
                   <li key={index}>  
                   
                   {item.nombre} - {item.apellido} 
                   
                   </li>
                   )
                }
                       
                   

            </ul>



        </Fragment>

    )
}

export default Form