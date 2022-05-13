import React from 'react'
import Image from 'next/image'
import styles from '../styles/Header.module.css'

import design from '../assets/images/RS-3.jpeg'

const Header = () => {
  return (
    <div className={ styles.app__header } id='home' >
        <div className={ styles.app__header_text } >
            <h1>become your own brand</h1>
            <p>With Avani - RS you can promote your own business and open yourself up to a wider market with more potential
                customers and with the option to also buy products from other brands on the platform in the location or institution
                of your choosing, Avani may just be the place for you  
            </p>
        </div>

        <div className={ styles.app__header_right } >
            <Image style={ styles.app__header_image }  src={design} alt='something image like' />
        </div>
    </div>
  )
}

export default Header