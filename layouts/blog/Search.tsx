import React from 'react'
import {BsSearch} from "react-icons/bs"
import TextInput from '../../util/TextInput'

const Search:React.FC=()=>{
  return (
    <div className='grid sm:grid-cols-2 grid-cols-1 items-center'>
       <div className='sm:w-[85%] w-full'>
           <h1 className='sm:text-[45px] text-[30px] text-[#1E232C]text-left font-normal font-[Poppins]'>Latest From The Blog</h1>
           <p className='text-[#000000] leading-[2.5] mt-2 opacity-[0.8] capitalize'>
           Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
           </p>
       </div>
       <div className='sm:w-[75%] w-full sm:mt-0 mt-6'>
           <form className='flex justify-end relative'>
               <TextInput
                 className='sm:p-5 p-3 border-[#000000] border-[1px] rounded-[38px] w-full indent-7 opacity-[1]'
                 placeholder='Search here'
               />
               <BsSearch 
               className='absolute sm:top-[27%] top-[23%] right-[10%] text-2xl cursor-pointer'
               />
           </form>
       </div>
    </div>
  )
}

export default Search