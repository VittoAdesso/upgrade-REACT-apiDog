import React from 'react'
import './styles.scss'
// improto Link así 
import { Link } from 'react-router-dom';
import negro from '../images/aquiles.jpg'; // gives image path, así llamo mi imagen 

const NavBar = () => {
// para hacer links que me lleven donde quiera. 1. importo como arriba, 2, les pongo etiquetas y le digo la ruta y ya está!!!! 
// ver como le pongo los botones 
// voy a usar BEM, block element modify llamando a hijos con doble __ para las claseses, en style s eve mejor 
  return (
    <>

      <div className='nav-bar'>

          <Link className="nav-bar__link" to="/">
            Home
          </Link>
        
          <Link className="nav-bar__link" to="/select">
            List all breeds
          </Link>
          
          <Link className="nav-bar__link" to="/breeds">
            Some pictures of breeds
          </Link>

          <Link className="nav-bar__link" to="/favorite">
            My favorite breed
          </Link>
      
      </div>

      <div >
          <img className="image-ppal" src={negro} alt="Negro" />
      </div>
    </>
  )
}

export default NavBar; 