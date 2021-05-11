import React from 'react'
import styles from './Pokemon.module.css'

function Pokemon(){
  return (
    <div className={styles.Pokemon}>
      <div className={styles['pokemon-image-container']}>
        <img src="https://www.fillmurray.com/200/200" alt="placeholder" />
      </div>
      <h2 className={styles['pokemon-name']}>Pokemon Name</h2>
      <div className={styles['pokemon-description-container']}>
        Pokemon Description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti similique sint doloremque nulla dicta soluta tempore eaque reiciendis provident maiores?
      </div>
    </div>
  )
}

export default Pokemon