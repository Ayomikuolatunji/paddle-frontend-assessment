import React from 'react'
import {BsArrowRightShort} from "react-icons/bs"


const KnowMore:React.FC= () => {




  return (
    <div className='bg-gradient-to-b from-[#213F72]  grid sm:grid-cols-2 grid-cols-1 to-[#19073B]  h-[463px] mb-20 w-full'>
        <div className="content flex justify-center flex-col h-[inherent] items-center">
           <div>
                <h1 className="text-[#FFFFFF] text-[44px] capitalize opacity-[1] font-medium font-[poppins] tracking-normal">what to know more about Metrics ?</h1>
                <p className='text-[#FFFFFF] font-normal text-[22px] opacity-[0.87] lowercase'>Learn who we are and what drives us.</p>
                <button>Contact us</button>
           </div>
        </div>
        <div className="overlay-box">

        </div>
    </div>
  )
}

export default KnowMore