import React from 'react'
// improto Link así 
import { Link } from 'react-router-dom';

const NavBar = () => {

// para hacer links que me lleven donde quiera. 1. importo como arriba, 2, les pongo etiquetas y le digo la ruta y ya está!!!! 


// ver como le pongo los botones 
  return (
    <div>
    <Link to="/">
      Home
    </Link>
   
    <Link to="/select">
      Listado
    </Link>
    
    <Link to="/breeds">
      Favorite breed
    </Link>

    <Link to="/">
      <button>Favorite breed</button>
    </Link>

     
      
      
    </div>
  )
}

export default NavBar; 