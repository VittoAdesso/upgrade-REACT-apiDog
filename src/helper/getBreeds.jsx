// llamaré los datos de las razos breeds con la url de la api y un async await 
const getBreeds = async () => {

     // asigno url
    const url = "https://api.thedogapi.com/v1/breeds"; 
    // le doy valor a la respuesta, que espere una llamada 
    const res = await fetch(url); 
    // mi resultadodo será en json 
    const breeds = await res.json(); 
    // devuéveme el restultado
  return breeds; 
  
}

export default getBreeds; 