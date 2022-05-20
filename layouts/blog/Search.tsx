import React from 'react'
import TextInput from '../../util/TextInput'

const Search:React.FC=()=>{
  return (
    <div className='grid sm:grid-cols-2 grid-cols-1'>
       <div className=''>
           <h1 className='sm:text-[45px] text-[30px] text-[#1E232C]text-left font-normal font-[Poppins]'>Latest From The Blog</h1>
           <p className='text-[#000000] opacity-[0.8] capitalize'>
           Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
           </p>
       </div>
       <div className=''>
           <form action="">
               <TextInput
                 className='p-3 border-[#000000] border-[1px] rounded-[38px]'
                 placeholder='search here'
               />
           </form>
       </div>
    </div>
  )
}

export default Search