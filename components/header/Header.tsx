import Link from 'next/link'
import React from 'react'



export const Header:React.FC = () => {
    const navItems=[
        {item:"About us",path:"/about"},
        {item:"Blog",path:"/blog"},
        {item:"Contact Us", path:"contact"}
    ]
  return (
    <div className='flex justify-between items-center w-full px-5 py-6 mx-auto bg-[#FAFAFA] sm:w-10/12 sm:px-0 sm:py-10 fixed z-50 top-0 left-0 right-0'>
        <div className="logo font-bold text-[20px]">
             <Link href={"/"}>
                 METRICKS
             </Link>
        </div>
        <nav className="nav">
            <ul className='flex items-center'>
                {
                    navItems.map((item,index)=>{
                        return <li className='sm:mx-10 mx-2 opacity-[1]
                        font-[Poppins] text-[17px] font-bold
                        first:text-[#1E232C]
                        even:text-[#FF00F7] 
                        last:shadow-contact-shadow last:rounded-[51px] last:bg-[#FFFFFF] last:text-regal-blue last:px-6 py-2' key={index}>
                            <Link href={item.path}>
                                {item.item}
                            </Link>
                        </li>
                    })
                }
            </ul>
        </nav>
    </div>
  )
}
