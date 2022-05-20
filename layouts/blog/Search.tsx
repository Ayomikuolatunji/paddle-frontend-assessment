import React from 'react'

const Search:React.FC=()=>{
  return (
    <div className='flex justify-between flex-wrap'>
       <div className=''>
           <h1 className='sm:text-[45px] text-[30px] text-[#1E232C]'>Latest From The Blog</h1>
           <p>
           Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
           </p>
       </div>
       <div className=''>
           <form action="">
               <input type="text" placeholder='Search here'/>
           </form>
       </div>
    </div>
  )
}

export default Search