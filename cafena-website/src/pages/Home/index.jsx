import React from 'react'
import SpecialMenuSection from '../../components/HomePageComponents/SpecialMenuSection'
import Testimonials from '../../components/HomePageComponents/Testimonials'
import TopGradeSection from '../../components/HomePageComponents/TopGradeSection'

const Home = () => {
  return (
    <main>
        {/* home */}

        <SpecialMenuSection/>
        <Testimonials/>
        <TopGradeSection/>
    </main>
  )
}

export default Home