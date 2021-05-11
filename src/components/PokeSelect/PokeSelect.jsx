import React from 'react'
import styles from './PokeSelect.module.css'

function PokeSelect(){
  return (
    <div className={styles.PokeSelect}>
      <label htmlFor="pokemon">Choose a Pokemon:</label>
      <select name="pokemon" id="pokemon">
      </select>
    </div>
  )
}

export default PokeSelect