import React from 'react'
import Form from './form/Form'

const Contact:React.FC = () => {
  return (
    <div className='bg-gradient-to-r from-[#213F72] z-10 to-[#19073B]  w-full h-[100vh]'>
        <div className="left w-[50%]">

        </div>
        <div className="right sm:w-[50%] w-full">
            <Form/>
        </div>
    </div>
  )
}

export default Contact