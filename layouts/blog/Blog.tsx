import React from 'react'
import Hero from './Hero'
import Search from './Search'

export default function Blog() {
  return (
   <div className='sm:w-10/12 mx-auto w-full sm:px-0 px-3'>
       <Hero/>
       <Search/>
   </div>
  )
}
