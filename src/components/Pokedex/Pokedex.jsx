import React from 'react'
import Pokemon from '../Pokemon/Pokemon'
import styles from './Pokedex.module.css'
import PokeSelect from '../PokeSelect/PokeSelect'

function Pokedex({ pokemonList, currentPokemonId, setCurrentPokemonId }){
  return (
    <div className={styles.Pokedex}>
      <PokeSelect
        setCurrentPokemonId={setCurrentPokemonId}
        pokemonList={pokemonList}
      />
      <Pokemon
        pokemonList={pokemonList}
        currentPokemonId={currentPokemonId}
      />
    </div>
  )
}

export default Pokedex