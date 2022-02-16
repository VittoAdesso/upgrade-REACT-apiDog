// le paso de prop dog, que es la constante que creé en app-jsx
import { Link } from 'react-router-dom';
const CarDogs = ( { dog }) => {

  return (

    <>
    <Link to="/">
      Home
    </Link>

    <div className="card">
    {/* coloco las imagenes con sus nombres debajo */}
        <img 
          src={ dog.image}
          alt="dog"
          />
        <p>
            {dog.breed.name}
        </p>


    </div>

    </>
  )
}

export default CarDogs; 