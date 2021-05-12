import React from 'react'
import styles from './Pokemon.module.css'
import { getPokemonImage } from '../../api/utils'

function Pokemon({ pokemonList, currentPokemonId }){
  if (pokemonList.length > 0) {
    const pokemonName = formatName(pokemonList[currentPokemonId - 1].name)

    function formatName(name){
      return name.slice(0,1).toUpperCase() + name.slice(1)
    }

    return (
      <div className={styles.Pokemon}>
        <div className={styles['pokemon-image-container']}>
          <img src={getPokemonImage(currentPokemonId)} alt="placeholder" />
        </div>
        <h2 className={styles['pokemon-name']}>
          {pokemonName}
        </h2>
        <div className={styles['pokemon-description-container']}>
          Pokemon Description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti similique sint doloremque nulla dicta soluta tempore eaque reiciendis provident maiores?
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.Pokemon}/>
    )
  }
}

export default Pokemon