import React from 'react'
import Hero from './Hero.About'
import MetricText from './MetricText'
import WhyUs from './WhyUs'

const About:React.FC = () => {

    
  return (
    <div className='bg-[#1F0042] w-full h-[100%] overflow-hidden'>
        <Hero/>
        <MetricText/>
        <WhyUs/>
        <div className='w-full h-[400px]'>

        </div>
    </div>
  )
}

export default About