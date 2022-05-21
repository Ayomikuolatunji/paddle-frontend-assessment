import React, { useEffect } from 'react'

const WhyUs:React.FC = () => {




    useEffect(()=>{
        const template='<div class="box"></div>'
        const array=[1,2,3,4,5]
        var container = document.querySelector("dot-group")!as HTMLDivElement;
        console.log(container);
        for (let i = 0; i <array.length; i++) {
          const createElement=document.createElement("div")!as HTMLDivElement
        //   container.appendChild(createElement)
        }
    },[])


  return (
    <div className='sm:w-10/12 mx-auto w-full mt-28 sm:px-0 px-3 h-[627px]'>
        <div className="main-wrapper grid sm:grid-cols-2 grid-cols-1">

            <div className="first-grid">
                <div className="why-intro">
                    <div className="readmore flex items-center relative">
                           <span className="text absolute top-0 left-0 -mt-5 opacity-[1] sm:-mt-9 text-[#ffffff] text-[18px] font-medium sm:text-[35px]">
                               01
                           </span>
                            <span className='bg-[#FFFFFF] h-[2px] w-[87px] block'></span>
                            <p className='text-[#FFFFFF] ml-3 cursor-pointer text-xl uppercase text-medium'>Why us
                            </p>
                        </div>
                    </div>

                    <div className="text-content">
                        <div className="content-wrapper md:w-[70%] sm:w-[85%] w-full">
                            <p className='text-[22px] text-[#FFFFFF] mt-10 '>
                            We pride ourselves in our ability to innovate and create world-class tools that provide reliable and efficient touchpoints between advertisers and affiliates.
                            </p>
                        </div>
                    </div>
                    <div className="dot-group">

                    </div>
                </div>
            </div>


        <div className="second-grid">

        </div>
    </div>
  )
}

export default WhyUs