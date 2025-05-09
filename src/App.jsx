import React from 'react'
import './App.scss'
import LandingPg from './pages/Landing/LandingPg'
import About from './pages/AboutPg/About'
import Services from './pages/Services/Services'
import ContactUs from './pages/ContactUsPg/ContactUs'
import Guards from './pages/GuardsPg/Guards'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <LandingPg />
      <About />
      <Services />
      <ContactUs />
      <Guards />
      <Footer />
    </>
  )
}

export default App
