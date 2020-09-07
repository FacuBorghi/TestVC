import React, { useState, Fragment } from 'react'




const Contador = () =>{

    const [viewTemp, setViewTemp]= useState(false)
    const [temp, setTemp]= useState('frio')
    const [numero, setNumero]= useState(1);

    const Aumentarnro = () =>{
        console.log('diste click')
        setNumero(numero + 1)
        setViewTemp(false)

    }
    
    

    const Temp = () => {

        if(numero >20){
           setTemp('calor')
        }
        else{
           setTemp('frio')
           
        }

        setViewTemp(true)
    }

        
return(
    <Fragment>
          
       <button className="btn btn-primary" onClick={()=>Aumentarnro()}>Aumentar</button>
       <p>{numero}</p>
       <button className="btn btn-success" onClick={()=>Temp()}>Ver Clima</button>
       {viewTemp &&    // si viewTemp es true &&(entonces) me muestra {temp}
       <p>{temp}</p>}

    </Fragment>
    
)

}

export default Contador
