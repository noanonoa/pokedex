import React from 'react'
import styles from './PokeSelect.module.css'

function PokeSelect({ pokemonList }){
  const pokemons = pokemonList.map((pokemon, index) => {
    return (
      <option
        key={index}
        value={index + 1}
      >
        {pokemon.name}
      </option>
    )
  })

  return (
    <div className={styles.PokeSelect}>
      <label htmlFor="pokemon">Choose a Pokemon:</label>
      <select>
        {pokemons}
      </select>
    </div>
  )
}

export default PokeSelect