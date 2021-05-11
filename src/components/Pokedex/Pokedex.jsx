import React from 'react'
import Pokemon from '../Pokemon/Pokemon'
import styles from './Pokedex.module.css'
import PokeSelect from '../PokeSelect/PokeSelect'

function Pokedex({ pokemonList }){
  return (
    <div className={styles.Pokedex}>
      <PokeSelect
        pokemonList={pokemonList}
      />
      <Pokemon />
    </div>
  )
}

export default Pokedex