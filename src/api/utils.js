// Get the first 150 Pokemons
export async function getOriginalPokemonList(){
  const data = await fetch(
    'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150'
  ).then(response => response.json())
  
  // the response results is an array of objects [{name: 'pokemon', url: '/pokemon/id'}, {...}]
  return data.results
}