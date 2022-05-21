import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import navItems from '../../helpers/navItems'



export const Header:React.FC = () => {
    const router=useRouter()



    
  return (
    <div className={`${router.asPath==="/about"? "bg-[#1F0042]":""} `}>
        <div className={`flex justify-between items-center w-full px-5 py-6 mx-auto sm:w-10/12 sm:px-0 sm:py-10 ${router.asPath==="/about"? "bg-[#1F0042]":""} `}>
        <div className={`logo font-bold text-[20px] 
        ${router.asPath==="/about" 
        ? "text-[#FFFFFF]"
        :"text-[#000000]"}`}>
             <Link href={"/"}>
                 METRICKS
             </Link>
        </div>
        <nav className="nav">
            <ul className='flex items-center'>
                {
                    navItems.map((item,index)=>{
                        return <li className={`sm:mx-10 mx-2 opacity-[1]  
                        ${router.asPath==="/about"
                        ? "first:text-[#FF00F7] even:text-[#FFFFFF] last:bg-[#271AC1] last:text-[#FFFFFF]"
                         :" even:text-[#FF00F7] "
                         }
                        font-[Poppins] text-[17px] font-bold
                        last:shadow-contact-shadow last:rounded-[51px] last:bg-[#FFFFFF] last:text-regal-blue last:px-6 py-2`} key={index}>
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
