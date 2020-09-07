import React,{useState, Fragment} from 'react'

const Lista = () =>{

    const [arrayNro, setArraynro] = useState([1,2,3,4,5,6,7])
    const [nro, setNro]= useState(7)

    const AgregarElem = () => {

        setNro(nro + 1)

        setArraynro([...arrayNro,nro])

    }


    return(
        <Fragment>
            <button className="btn-info" onClick= {AgregarElem}>Agregar</button>
            
            {
                arrayNro.map( (item, index) =>  <p key={index}> {item} - {index} </p>)
            }
         



        </Fragment>
    )
}

export default Lista