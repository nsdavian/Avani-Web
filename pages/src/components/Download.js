import React, {useEffect, useRef} from 'react'
import styles from '../styles/Download.module.css'
import { Button } from '@material-ui/core'

import Lottie from 'lottie-web'
import animationData from '../assets/85849-shopping (1).json'

const Download = () => {
    const container = useRef(null)

    useEffect(() => {
        Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData,
        })

        return () => {
            Lottie.destroy();
          };
    }, [])
    

  return (
    <div className={styles.app__download} id='download' >
        <div className={styles.app__download_animation_wrap} >
           <div className={styles.app__download_animation} ref={container} /> 
        </div>
        
        
        <div className={styles.app__download_link} >
            <h2>Begin your journey with Avani and take a step forward with your business </h2>
            <button 
            onClick={() => alert('Download link not available')}
            className={styles.app__download_button} >Download</button>
        </div>
    </div>
  )
}

export default Download