import { useRouter } from 'next/router'
import React from 'react'
import {BsArrowRightShort} from "react-icons/bs"
import CustomButton from '../../util/CustomButton'


// it is a reusable components and it is used in both /blog and /about us page


const KnowMore:React.FC= () => {
   const router=useRouter()

  return (
    <div className={`grid sm:grid-cols-2 grid-cols-1  h-[463px] mb-20 w-full
    sm:px-0 px-2
     ${router.asPath==="/about"? "bg-gradient-to-r from-[#213F72] to-[#213F72] " : 
     router.asPath==="/blog" ?"bg-gradient-to-b from-[#213F72] to-[#19073B]"
     :" bg-gradient-to-b from-[#213F72]to-[#19073B] "}`}>
        <div className="content flex justify-center flex-col h-[inherent] items-center">
           <div className='text-left'>
                <h1 className="text-[#FFFFFF] text-[44px] capitalize opacity-[1] font-medium font-[poppins] tracking-normal">what to know more about Metrics ?
                </h1>
                <p className='text-[#FFFFFF] font-normal text-[22px] opacity-[0.87] lowercase'>Learn who we are and what drives us.
                </p>
                <div className="flex items-center mt-2">
                    <CustomButton className='text-[#FF00F7] text-[36px] capitalize' text='contact'/>
                    <BsArrowRightShort className='text-[#FF00F7] text-[60px]'/>
                </div>
           </div>
        </div>
        <div className="sm:flex justify-center flex-col h-[inherent] items-center hidden relative ml-10">
            {/* right dim box dim  */}
            <div className='bg-yellow-500 h-[100px] w-[230px] rounded-md shadow-2xl opacity-[0.5] block ml-12'></div>
            <div className='bg-[#19073B] h-[318px] w-[557px] backdrop-blur-[16px] rounded-md shadow-xl opacity-[0.5] block absolute'>
            </div>
        </div>
    </div>
  )
}

export default KnowMore