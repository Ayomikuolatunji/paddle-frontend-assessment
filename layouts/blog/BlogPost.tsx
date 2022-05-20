import Image from 'next/image'
import React from 'react'
import { blogItems } from '../../helpers/blogItems'

const BlogPost:React.FC=()=>{


  return (
    <div className='grid sm:grid-cols-3 sm:gap-10 grid-cols-1 mt-24'>
        {
            blogItems.map((blog,index)=>{
                return <div key={index} className="shadow-blog-post-shadow h-[auto] p-6">
                      <div>
                      <Image 
                        src={blog.image} 
                        alt={blog.title} 
                        width={"487px"}
                        height={"322px"}
                      />
                      </div>
                      <h1 className="text-[#1E232C] font-[600] 
                      text-[26px] leading-[1.8] capitalize opacity-[1] font-[Poppins]">
                          {blog.title}
                      </h1>
                      <p className="p">
                          {blog.post}
                      </p>
                </div>
            })
        }
    </div>
  )
}

export default BlogPost