import React from 'react'

const HeroText:React.FC = () => {
  return (
    <div className='flex sm:mt-20 w-4/5 mt-8 m-auto space-y-8 justify-center items-center flex-col'>
      <h1 className='uppercase text-center text-white text-3xl md:text-4xl font-bold lg:text-7xl leading-12' >something awesome is coming Soon</h1>
      <p className='text-white leading-10 font-light md:leading-10 text-[16px] md:text-xl text-center'>Your all-in-one affliate marketing tracking software <span className='font-bold' >track</span>, <span className='font-bold'>automate</span> and <span className='font-bold'>
        optimize</span> your compaigns </p>
    </div>
  )
}

export default HeroText