import React from 'react'
import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About'
import Download from './components/Download'
import Footer from './components/Footer'

const App = () => {
  return (
    <div style={{ backgroundColor: '#59D6D7' }} >
        <Nav />
        <Header />
        <About />
        <Download />
        <Footer />
    </div>
  )
}

export default App