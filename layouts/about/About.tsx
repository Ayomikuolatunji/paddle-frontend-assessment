import React from 'react'
import Footer from '../../components/footer/Footer'
import KnowMore from '../../components/know-more/KnowMore'
import Hero from './Hero.About'
import MetricText from './MetricText'
import WhyUs from './WhyUs'

const About:React.FC = () => {

    
  return (
    <div className='bg-[#1F0042] w-full h-[100%] overflow-hidden'>
        <Hero/>
        <MetricText/>
        <WhyUs/>
          
          <div className="mt-80 sm:mt-0"></div>
        <KnowMore/>
        <Footer/>
    </div>
  )
}

export default About