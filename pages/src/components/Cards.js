import React from 'react'
import styles from '../styles/Cards.module.css'



const Cards = ({ title, sub }) => {
  return (
    <div className={styles.about__card} >
        <h3 className={styles.about__text} >{title}</h3>
        <p className={styles.about__sub} >{sub}</p> 
    </div>
  )
}

export default Cards