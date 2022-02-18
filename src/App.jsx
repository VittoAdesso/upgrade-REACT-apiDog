import React, { useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

import DogsSelect from './components/Dogs/DogsSelect';
import CarDogs from './components/CarDogs/CarDogs';
import getDogImages from './helper/getDogImages';
import ImagesDogs from './components/ImagesDogs/ImagesDogs';

import negro2 from '../src/components/images/AQUILES2.jpeg'; // gives image path, así llamo mi imagen 


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
    <>

      <Routes>

        <Route path="/" element={  <NavBar /> }/> 
        <Route path="/select" element={ 
          <div className="app">
          <DogsSelect updateDogImage={ updateDogImage }/>
          <CarDogs dog={ dog } />
          </div> }/>
        <Route path="/breeds" element={ <div> <ImagesDogs  /> </div>} /> 
        <Route path="/favorite" element={  <img src={ negro2 } alt="Negro2" /> } /> 

      </Routes>
      </>
  );
}

export default App;
