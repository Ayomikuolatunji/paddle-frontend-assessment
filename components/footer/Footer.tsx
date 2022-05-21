import { useRouter } from 'next/router'
import React from 'react'
import {AiFillYoutube,AiFillFacebook,AiFillLinkedin,AiFillInstagram,AiFillTwitterSquare} from "react-icons/ai"





const Footer:React.FC = () => {
   const recentYear=new Date().getFullYear()
   const router=useRouter()


     const icons= [
      {icon: <AiFillYoutube className={`text-4xl ml-3 ${
        router.asPath==="/blog" ? "text-[#000000]" : router.asPath==="/about" ? "text-[#FFFFFF]" : "text-[#000000]"
      }`}/>},
      {icon:  <AiFillFacebook
        className={`text-4xl ml-4 ${
          router.asPath==="/blog" ? "text-[#000000]" : router.asPath==="/about" ? "text-[#FFFFFF]" : "text-[#000000]"
        }`}
      />},
      {icon: <AiFillLinkedin 
        className={`text-4xl ml-3 ${
        router.asPath==="/blog" ? "text-[#000000]" : router.asPath==="/about" ? "text-[#FFFFFF]" : "text-[#000000]"
      }`}/>},
      {icon: <AiFillInstagram 
        className={`text-4xl ml-3 ${
        router.asPath==="/blog" ? "text-[#000000]" : router.asPath==="/about" ? "text-[#FFFFFF]" : "text-[#000000]"
      }`}/>},
      {icon:  <AiFillTwitterSquare 
        className={`text-4xl ml-3 ${
        router.asPath==="/blog" ? "text-[#000000]" : router.asPath==="/about" ? "text-[#FFFFFF]" : "text-[#000000]"
      }`}/>}
    ]
 
  
  return (
    <div className='mt-24 w-full h-[200px] flex justify-center items-center flex-col'>
        <div className="social-icons flex my-5 mr-4">
          {icons.map((icon,index)=>{
                return <span key={index}>{icon.icon}</span>
          })}
        </div>
      
        <div 
        className={`term-service mb-6 ${router.asPath==="/blog" ? " text-[#000000]" : router.asPath==="/about" ? "text-[#ffffff]" :"text-[#000000]"}`}>
            <span className='mr-4'>Terms of services</span>
            <span className=''>Privacy policy</span>
        </div>
        
        <div className="copyright mb-5">
          <p  className={`term-service mb-6 ${router.asPath==="/blog" ? " text-[#000000]" : router.asPath==="/about" ? "text-[#ffffff]" :"text-[#000000]"}`}>
          Copyright {recentYear} @ Peddle Technologies. All Rights Reserved.
          </p>
        </div>
    </div>
  )
}

export default Footer