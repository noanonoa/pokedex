import React, { useEffect, useState } from 'react'
import Pokedex from './components/Pokedex/Pokedex'
import { getOriginalPokemonList } from './api/utils'

function App() {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    async function loadPokemonList(){
      const results = await getOriginalPokemonList()

      setPokemonList(results)
    }

    loadPokemonList()
  }, [])

  return (
    <div className="App">
      <Pokedex
        pokemonList={pokemonList}
      />
    </div>
  );
}

export default App;
