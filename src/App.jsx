import React from 'react'
import Navbar from './components/Navbar'
import BackgroundCarousel from './components/BackgroundCarousel'
import About from './components/About'
import GallerySection from './components/GallerySection'
import SevicesSection from './components/SevicesSection'
import ContactUs from './components/ContactUs'
import FooterSection from './components/FooterSection'

const App = () => {
  return (
    <>
      <Navbar />
      <BackgroundCarousel />
      <About />
      <GallerySection />
      <SevicesSection />
      <ContactUs />
      <FooterSection />
    </>
  )
}

export default App
