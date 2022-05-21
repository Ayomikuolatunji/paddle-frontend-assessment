import React from 'react'
import Form from './form/Form'

const Contact:React.FC = () => {
  return (
    <div className='bg-gradient-to-r from-[#213F72] z-10 to-[#19073B]  w-full h-[100vh] grid sm:grid-cols-2 grid-cols-1'>
        <div className="left">

        </div>
        <div className="right w-full h-[inherent]">
            <Form/>
        </div>
    </div>
  )
}

export default Contact