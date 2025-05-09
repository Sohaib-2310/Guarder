import React from 'react'
import './App.scss'
import LandingPg from './pages/Landing/LandingPg'
import About from './pages/AboutPg/About'
import Services from './pages/Services/Services'
import ContactUs from './pages/ContactUsPg/ContactUs'
import Guards from './pages/GuardsPg/Guards'
import Header from './components/Header/Header'

const App = () => {
  return (
    <>
      <LandingPg />
      <About />
      <Services />
      <ContactUs />
      <Guards />
      <Header />
    </>
  )
}

export default App
