import React from 'react'
import Pokemon from '../Pokemon/Pokemon'
import styles from './Pokedex.module.css'
import PokeSelect from '../PokeSelect/PokeSelect'

function Pokedex(){
  return (
    <div className={styles.Pokedex}>
      <PokeSelect />
      <Pokemon />
    </div>
  )
}

export default Pokedex