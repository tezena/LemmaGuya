import React from 'react'
import HeroSection from '../components/LandingPageComponents/Hero'
import Art from '../components/LandingPageComponents/NextToHero'
import '../components/LandingPageComponents/style.css'
import Display from '../components/LandingPageComponents/Display'
import Footer from '../components/Footer'
import './page.css'
import Carousel from '../components/carousel/myCarousel'
function Home() {
  return (
    <>
    <HeroSection />
    <Art />
    <Carousel />
        
    </>
  )
}

export default Home