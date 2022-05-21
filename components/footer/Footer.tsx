import { useRouter } from 'next/router'
import React from 'react'
import {AiFillYoutube,AiFillFacebook,AiFillLinkedin,AiFillInstagram,AiFillTwitterSquare} from "react-icons/ai"





const Footer:React.FC = () => {
   const recentYear=new Date().getFullYear()
   const router=useRouter()

  function iconFunc(){
    return  [
      {icon: <AiFillYoutube className='text-4xl ml-3'/>},
      {icon:  <AiFillFacebook className="text-4xl ml-3"/>},
      {icon: <AiFillLinkedin className='text-4xl ml-3'/>},
      {icon: <AiFillInstagram className='text-4xl ml-3'/>},
      {icon:  <AiFillTwitterSquare className='text-4xl ml-3'/>}
    ]
 
  }
  return (
    <div className='mt-24 w-full h-[200px] flex justify-center items-center flex-col'>
        <div className="social-icons flex my-5 mr-4">
             <AiFillYoutube className='text-4xl ml-3'/>
             <AiFillFacebook className="text-4xl ml-3"/>
             <AiFillLinkedin className='text-4xl ml-3'/>
             <AiFillInstagram className='text-4xl ml-3'/>
             <AiFillTwitterSquare className='text-4xl ml-3'/>
        </div>
        <div className="term-service mb-6">
            <span className='mr-4'>Terms of services</span>
            <span className=''>Privacy policy</span>
        </div>
        <div className="copyright mb-5">
        Copyright {recentYear} @ Peddle Technologies. All Rights Reserved.
        </div>
    </div>
  )
}

export default Footer