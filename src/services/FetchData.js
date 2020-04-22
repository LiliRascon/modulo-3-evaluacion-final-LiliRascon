const ENDPOINT = 'https://rickandmortyapi.com/api/character/';

const fetchData = () => fetch(ENDPOINT).then(response => response.json());
//funcion que retorna la respuesta del último then
//ese then se va manejar desde el componente de react
//luego importo la funcion, es decir fetchData en App.js para poder utilizarla  Nota. la función no el componente FetchData
export default fetchData;
