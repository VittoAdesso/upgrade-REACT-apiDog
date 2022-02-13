import React, { useState, useEffect} from 'react';

import DogsSelect from './components/Dogs/DogsSelect';
import CarDogs from './components/CarDogs/CarDogs';
import getDogImages from './helper/getDogImages';

// import NavBar from './components/NavBar/NavBar';



// 2 creamos una nueva constante para usarla de inicio de estado
const initialDog = {
  image: "", 
  breed: {
    id: "", 
    name: "", 
  }
}

function App() {

  // 1 creamos la constante para useState 
  const [ dog, setDog] = useState(initialDog); 

  // 3 CREO NUEVA ACCIÓN 
  const updateDogImage = (breedId) => {
    getDogImages(breedId)
    // argumento nos retorna algo y luego lo asigno a setter 
      .then((newDog) => {
        setDog(newDog); 
      })
  }

  useEffect(() => {
    updateDogImage(); 
  }, [] ); 
    
  return (
    <div className="app">
      {/* <NavBar/> */}

      {/* <ListBreeds/> */}
      <DogsSelect updateDogImage={updateDogImage}/>
      {/* paso atributo dog al componente  */}
      <CarDogs dog={ dog } />
      
    </div>
  );
}

export default App;
