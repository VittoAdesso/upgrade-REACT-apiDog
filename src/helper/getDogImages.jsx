
// llamaré los datos de las razos breeds con la url de la api y un async await 
const getDogImages = async (breedId) => {
  // comprobación antes de las llamadas con ternario 

  const url = !breedId || breedId === 0 
  ? "https://api.thedogapi.com/v1/images/search" 
  : "https://api.TheDogAPI.com/v1/images/search?breed_ids=" + breedId

    // le doy valor a la respuesta, que espere una llamada 
    const res = await fetch(url); 
    // mi resultadodo será en json 
    const [data] = await res.json(); 
    // ahora, le hago un destructuring a data sacando cada pedazo de objeto que necesito , le hago variable porque comprobaré resultados y también modifico el objeto 
    let { url: image , breeds: [breed]} = data; 

// compruebo que todo lo que no tenga raza sea ramdon, así no me da error 
      if( !breed){
          breed = { 
            id: 0, 
            name: 'random'
          }
    }

    // lo formateo como la api tiene estructura
      const dogImage = {
      image, 
      breed
      }
    // devuéveme el restultado
  return dogImage; 
  }

export default getDogImages; 