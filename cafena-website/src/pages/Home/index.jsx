import React from 'react'
import HeroArea from '../../components/HomePageComponents/HeroArea'
import Features from '../../components/HomePageComponents/Features'
import AboutUsSection from '../../components/HomePageComponents/AboutUsSection'
import SpecialMenuSection from '../../components/HomePageComponents/SpecialMenuSection'
import Testimonials from '../../components/HomePageComponents/Testimonials'
import TopGradeSection from '../../components/HomePageComponents/TopGradeSection'

const Home = () => {
  return (
    <main>
        <HeroArea/>
        <Features/>
        <AboutUsSection/>
        <SpecialMenuSection/>
        <Testimonials/>
        <TopGradeSection/>
    </main>
  )
}

export default Home