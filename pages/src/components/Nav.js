import React, { useState } from 'react'
import styles from '../styles/Nav.module.css'
import Image from 'next/image'
import logo from '../assets/images/caslogo.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons'


const Nav = () => {
    const [ toggle, setToggle ] = useState(false)

  return (
    <nav className={styles.app__nav}  >
        <div className={styles.app__nav_logo} >
            <Image src={logo} height={50} width={130} />
        </div>
        <ul className={styles.app__nav_list} >
            <li><a href='#home' >Home</a></li>
            <li><a href='#about' >About Us</a></li>
            <li><a href='#download' >Download</a></li>
        </ul>
        <a className={styles.contact__a} >
            <div onClick={() => alert('Contact support Unavailable')} className={styles.app__nav_contact} >
                Contact Us
            </div>
        </a>

        <div className={styles.app__nav_smallscreen} >
            <FontAwesomeIcon icon={faBarsStaggered} className={styles.app__nav_open} onClick={() => setToggle(true)} />

            {toggle && (
                <div className={styles.app__nav_smallscreen_overlay} >
                    <FontAwesomeIcon icon={faXmark} className={styles.app__nav_close} onClick={() => setToggle(false)} />
                    <ul className={styles.app__nav_smallscreen_list} >
                        <li><a href='#home' onClick={() => setToggle(false)} >Home</a></li>
                        <li><a href='#about' onClick={() => setToggle(false)} >About Us</a></li>
                        <li><a href='#contact' >Contact Us</a></li>
                        <li><a href='#download' onClick={() => setToggle(false)} >Download</a></li>
                    </ul>
                </div>
            )}

        </div>
    </nav>
  )
}

export default Nav
