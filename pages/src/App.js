import React from 'react'
import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About'
import Download from './components/Download'
import Footer from './components/Footer'
import styles from  './styles/Home.module.css'

const App = () => {
  return (
    <div className={styles.main} >
        <Nav />
        <Header />
        <About />
        <Download />
        <Footer />
    </div>
  )
}

export default App