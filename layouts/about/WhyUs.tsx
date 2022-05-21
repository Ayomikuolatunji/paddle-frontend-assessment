import React from 'react'

const WhyUs:React.FC = () => {
  return (
    <div className='sm:w-10/12 mx-auto w-full sm:px-0 px-3 h-[627px]'>
        <div className="main-wrapper grid sm:grid-cols-2 grid-cols-1">

            <div className="first-grid">
                <div className="why-intro">
                    <div className="readmore flex items-center">
                            <span className='bg-[#FFFFFF] h-[2px] w-[87px] block'></span>
                            <p className='text-[#FFFFFF] ml-3 cursor-pointer'>Why us
                            </p>
                        </div>
                    </div>

                    <div className="text-content">
                        <div className="content-wrapper">
                            <p>
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