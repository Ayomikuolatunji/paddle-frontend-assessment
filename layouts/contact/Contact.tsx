import Link from 'next/link'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Form from './form/Form'




const MyButton = React.forwardRef((prop:any,ref:any) => {
  return (
    <a href={prop.href} onClick={prop.onClick}  ref={ref}>
        <AiOutlineArrowRight className='text-3xl' />
    </a>
  )
})



// cobtact us page exported to /poges/contact/index.tsx

const Contact:React.FC = () => {
  return (
   <div className='relative'>
     {/* form left side only display on desktop.  */}
      <div className='bg-gradient-to-r from-[#213F72] z-10 to-[#19073B]  w-full h-[100vh] grid sm:grid-cols-2 grid-cols-1'>
        <div className="left sm:block hidden w-full h-[100vh] cover">

        </div>
        {/* form components  */}
        <div className="right w-full h-[inherent]">
            <Form/>
        </div>
      </div>
      {/* absolute link postion to the midlle top of the screen */}
      <div className="circle bg-[#ffffff] sm:w-[104px] w-[52px] h-[52px] sm:h-[104px] rounded-full absolute sm:top-10 top-[1%] flex justify-center items-center sm:left-[47%] left-[5%] cursor-pointer">
         <Link href={"/comingsoon"}>
           <MyButton/>
         </Link>
      </div>
   </div>
  )
}

export default Contact