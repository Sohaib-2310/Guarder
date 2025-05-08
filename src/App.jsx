import React from 'react'
import './App.scss'
import LandingPg from './pages/LandingPg'
import About from './pages/About'
import Services from './pages/Services'
import ContactUs from './pages/ContactUs'
import Guards from './pages/Guards'
import Header from './components/Header'

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
