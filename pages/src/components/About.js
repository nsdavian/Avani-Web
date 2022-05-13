import React from 'react'
import Cards from './Cards'
import Wave from '../assets/Wave'

import buy from '../assets/images/RS-5.jpg'
import sell from '../assets/images/RS-6.jpg'
import loca from '../assets/images/RS-9.jpg'
import styles from '../styles/About.module.css'
import { faBagShopping, faDollarSign, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <div className={styles.app__about} id='about' >
        <h2>About Us</h2>
        <div className={styles.app__card_case} >
            <Cards
            source={buy}
            sub='Avani not only provides you with the option to sell your products
                 but also with an option to buy products and unlike most shopping platforms you can easily
                 take a look at what your local retailers have on sale and maybe even buy a product or two'
            />
            <Cards
            source={sell}
            sub="When we say become your own brand we mean it, because with avani you can start and grow your
                 brand's portfolio with a wide range of locations opotions to put your product on the market,
                 exposing them to more potential customers, leaving you with the problem of managing those customers"
            />
            <Cards
            source={loca}
            title='Location' 
            sub="Avani - RS dosen't just provide you with a convenient way of selling or buying products from a given
                 state but with Avani you can also select an institution thereby allowing you to shop specifically for
                 your sales in or around your school through our app as convient ar you'll like"
            />
        </div>
        <Wave className={styles.app__about_wave} /> 
    </div>
  )
}

export default About