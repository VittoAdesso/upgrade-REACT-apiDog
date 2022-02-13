import React, {useState, useEffect} from 'react'
import getBreeds from '../../helper/getBreeds';

//1
const DogsSelect = ( { updateDogImage }) => {

  // creo un estado 
  // al ppo le doy estado de array que creé arriba, para ir probanod, pero luego la idea es que sea un array vacío
  const [breeds , setBreeds] = useState([]); 

  // gestionaremos el cambio de imagenes con useefet
  //3
  useEffect(()=> {

    // cargo función que hice abajo, que está conectada con la url de la api 
    updateBreeds(); 
  }, []); 

  // construyo acción o función 
//2
  const updateBreeds = () => {
    // llamo a getbreds mi async await
    getBreeds()
    // le paso por argumento nuevas razas  y que me lo cargue en esl estado setBreeds.
      .then((newBreeds) => {
        setBreeds(newBreeds); 
      })

  }

  return (

  
    // todo onClick y onChange lleva function flecha
    //4 ahora le doy la función de update que está en app.jsx , también bajada en props que cada vez que cambie  de nombre me cambie imagen 
    <select onChange={(e)=> updateDogImage(e.target.value) }>

    {/* mapeo el array de objetos, que quiero que me devuelva resultados por cada vuelta  */}
    {/* recuerda que estoy mapeando el valor de breeds, y cuando entra en el array de objetos, siempre llamo breeds. su isElementOfType. Ojo! Recuerda ponerl la key, que será lo que le diferenciará del resto de selecciones   */}
    { breeds.map(breed => (
      <option value={breed.id} key={breed.id} > 
      {breed.name} 
      </option>
    ))}
      
  
        
    </select>
  )
}

export default DogsSelect; 