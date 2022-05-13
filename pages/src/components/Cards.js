import React from 'react'
import styles from '../styles/Cards.module.css'
import Images from 'next/image'

import map from '../assets/images/RS-8.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons'

const Cards = ({ source, title, sub }) => {
  return (
    <div className={styles.about__card} >
        <div className={ styles.about__box } >
            <div className={styles.about__content_front} >
                <div className={styles.about__img} >
                   <Images src={source} /> 
                </div>
                <h3 className={styles.about__text} >{title}</h3>
                <div className={styles.about__flip} >
                    <FontAwesomeIcon icon={faAnglesLeft} className={styles.about__flip_icon} />
                    <h4>Flip</h4>
                </div>
            </div>

            <div className={styles.about__content_back} >
                <p>{sub}</p> 
            </div>
        </div>
    </div>
  )
}

export default Cards