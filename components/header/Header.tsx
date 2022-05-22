import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import navItems from '../../helpers/navItems'



export const Header:React.FC = () => {
    const router=useRouter()



    
  return (
    <div className={`
    ${router.asPath==="/about"? "bg-[#1F0042]": (router.asPath==="/comingsoon" || router.asPath==="/") ? "bg-[#19073B]" : ""} `}>
        <div className={`flex justify-between items-center w-full px-5 py-6 mx-auto sm:w-10/12 sm:px-0 sm:py-10 
        ${router.asPath==="/about"? "bg-[#1F0042]":""} `}>
            {/* logo */}
        <div className={`logo font-bold text-[20px] 
        ${(router.asPath ==="/about" || router.asPath==="/comingsoon" || router.asPath==="/")
        ? "text-[#FFFFFF]"
        :"text-[#000000]"} text-[20px]`
        }>
             <Link href={"/"}>
                 METRICKS
             </Link>
        </div>
        {/* nav items */}
        <nav className="nav">
            <ul className='flex items-center'>
                {
                    navItems.map((item,index)=>{
                        return <li className={`sm:mx-10 mx-1 opacity-[1]  
                        ${(router.asPath==="/about" 
                        || router.asPath==="/comingsoon" 
                        || router.asPath==="/")
                        ? "first:text-[#FF00F7] even:text-[#FFFFFF]  last:bg-[#271AC1] odd:text-[#ffffff] last:text-[#FFFFFF]"
                         :" even:text-[#FF00F7]"
                         }
                        font-[Poppins] text-[13px] font-bold 
                        last:shadow-contact-shadow last:rounded-[51px]  last:text-regal-blue last:px-6 py-2 sm:text-[20px]`} key={index}>
                            <Link href={item.path}>
                                {item.item}
                            </Link>
                        </li>
                    })
                }
            </ul>
        </nav>
    </div>
    </div>
  )
}
