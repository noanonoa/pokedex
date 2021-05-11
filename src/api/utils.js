// Get the first 150 Pokemons
export async function getOriginalPokemonList(){
  const data = await fetch(
    'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150'
  ).then(response => response.json())
  
  // the response results is an array of objects [{name: 'pokemon', url: '/pokemon/id'}, {...}]
  return data.results
}

// Get pokemon image (front view)
export function getPokemonImage(id){
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}