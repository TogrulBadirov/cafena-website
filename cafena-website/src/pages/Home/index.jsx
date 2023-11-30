import React from 'react'
import HeroArea from '../../components/HomePageComponents/HeroArea'
import Features from '../../components/HomePageComponents/Features'
import SpecialMenuSection from '../../components/HomePageComponents/SpecialMenuSection'
import Testimonials from '../../components/HomePageComponents/Testimonials'
import TopGradeSection from '../../components/HomePageComponents/TopGradeSection'

const Home = () => {
  return (
    <main>
        <HeroArea/>
        <Features/>
        <SpecialMenuSection/>
        <Testimonials/>
        <TopGradeSection/>
    </main>
  )
}

export default Home