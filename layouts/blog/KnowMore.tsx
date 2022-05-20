import React from 'react'
import {BsArrowRightShort} from "react-icons/bs"
import CustomButton from '../../util/CustomButton'


const KnowMore:React.FC= () => {

  return (
    <div className='bg-gradient-to-b from-[#213F72] grid sm:grid-cols-2 grid-cols-1 to-[#19073B] h-[463px] mb-20 w-full
    sm:px-0 px-2'>
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