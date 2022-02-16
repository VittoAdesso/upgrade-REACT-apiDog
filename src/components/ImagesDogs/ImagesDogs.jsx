import React, {useState, useEffect} from 'react'
import  './styles.scss'; 
import { Link } from 'react-router-dom';

const PruebaApi = () => {

  const [image , setImage ] = useState([]); 
    
    useEffect(() => {
      // url que me indica la api, que me dará tooodas la imagenes, pero VITTORIO, mira luego de search, lñe pones ?limit=# que yo quiera, para me pinte tanrto como quiera 
        fetch('https://api.thedogapi.com/v1/images/search?limit=40')
            .then(res => res.json())
            .then((imagenes) =>{
                setImage(imagenes);
            })
    }, [])

   return (


    <>

      <Link to="/">
          Home
      </Link>


      <div className='listImages'>

      {/* siempre poner la lista de imagenes fuera, y el map, me va a crear listado de imagenes, tanto como le pida */}
      {/* entra en mi array de vueltas picture.id = y me pinta una imagen por ByteLengthQueuingStrategy, hasta llegar al limiot que le puse arriba  */}
        <ul> 
            { image.map( (picture) => { return (
            
              <li key={picture.id}> < img  className="breeds-img" src={ picture.url } alt='hola' /> </li>
            )
          })} 
        </ul>
      </div>
    </>
  )
}


export default PruebaApi; 
