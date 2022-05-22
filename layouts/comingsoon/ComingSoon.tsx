import React from 'react'
import Footer from '../../components/footer/Footer'
import CountDown from './CountDown'
import HeroText from './Hero.ComimgSoon'
import Waitlist from './Waitlist'

const ComingSoon:React.FC = () => {
  return (
    <div className='flex flex-col space-y-3 mx-auto w-full h-[100%] bg-gradient-to-b from-[#19073B] z-10 to-[#19073B]'>
    <HeroText/>
    <CountDown />
    <Waitlist />
    <Footer/>
    </div>
  )
}

export default ComingSoon