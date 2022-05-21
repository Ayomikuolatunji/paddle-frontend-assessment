import React, { useEffect } from 'react'

const WhyUs:React.FC = () => {




    // useEffect(()=>{

    //     var container = document.querySelector(".dot-group")! as HTMLDivElement;

    //   function Values() {
    //     for (let i = 0; i <Array.from(Array(81).keys()).length; i++) {
    //         const createElement=document.createElement("div")! as HTMLDivElement
    //       //   will be style in styles.css
    //         createElement.className="dot-child"
    //         container.appendChild(createElement)
    //       }
    //   }


    //   Values()
    // },[])


  return (
    <div className='sm:w-10/12 mx-auto w-full my-28 sm:mt-56 sm:px-0 px-3 h-[627px]'>
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
                    <div className="dot-group mt-32 flex gap-2 w-[234px] my-10 flex-wrap">
                         
                    </div>
                </div>
                <div className="second-grid relative w-full">
                    <div className="lefts sm:w-[50%] w-full h-[inherent] flex items-center justify-center relative">
                        <div className='bg-blue-200 h-[330px] w-[260px] rounded-md shadow-2xl sm:opacity-[1] z-20  absolute top-[20%] sm:right-[12%]'>
                        </div>
                    </div>               
                    <div className="bg-red-500 bottom-0 absolute top-0 left-0 right-0 flex justify-start h-[395px] flex-col p-3">
                          <div className="readmore flex items-center relative mt-12">
                                <span className="text absolute top-0 left-0 -mt-5 opacity-[1] sm:-mt-9 text-[#ffffff] text-[18px] font-medium sm:text-[35px]">
                                    01
                                </span>
                                <span className='bg-[#FFFFFF] h-[2px] w-[87px] block'></span>
                                <p className='text-[#FFFFFF] ml-3 cursor-pointer text-xl uppercase text-medium'>Why us
                                </p>
                            </div>
                            <div className="text-content">
                                <div className="content-wrapper  w-full">
                                    <p className='text-[22px] text-[#FFFFFF] mt-10 '>
                                    We pride ourselves in our ability to innovate and create world-class tools that provide reliable and efficient touchpoints between advertisers and affiliates.
                                    </p>
                                </div>
                            </div>
                            <div className="text-content">
                                <div className="content-wrapper  w-full">
                                    <p className='text-[22px] text-[#FFFFFF] mt-10 '>
                                    We pride ourselves in our ability to innovate and create world-class tools that provide reliable and efficient touchpoints between advertisers and affiliates.
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
    </div>
  )
}

export default WhyUs