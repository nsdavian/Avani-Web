import React from 'react'
import Cards from './Cards'
import Wave from '../assets/Wave'

import { motion } from 'framer-motion'
import styles from '../styles/About.module.css'


const About = () => {
  return (
    <motion.div 
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5, type: 'tween' }}
    className={styles.app__about} 
    id='about' >
        <h2>About Us</h2>
        <motion.div 
        className={styles.app__card_case} >
            <Cards
            title='Buy'
            sub='Avani not only provides you with the option to sell your products
                 but also with an option to buy products and unlike most shopping platforms you can easily
                 take a look at what your local retailers have on sale and maybe even buy a product or two'
            />
            <Cards
            title='Sell'
            sub="When we say become your own brand we mean it, because with avani you can start and grow your
                 brand's portfolio with a wide range of locations options to put your product on the market,
                 exposing them to more potential customers, leaving you with the problem of managing those customers"
            />
            <Cards
            title='Location' 
            sub="Avani - RS dosen't just provide you with a convenient way of selling or buying products from a given
                 state but with Avani you can also select an institution thereby allowing you to shop specifically for
                 your sales in or around your school through our app as convient ar you'll like"
            />
        </motion.div>
        <Wave className={styles.app__about_wave} /> 
    </motion.div>
  )
}

export default About