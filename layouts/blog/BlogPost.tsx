import Image from 'next/image'
import React from 'react'
import { blogItems } from '../../helpers/blogItems'

const BlogPost:React.FC=()=>{


  return (
    <div className='grid sm:grid-cols-3 gap-10 grid-cols-1 mt-24'>
        {
            blogItems.map((blog,index)=>{
                return <div key={index} className="h-[auto] p-6 shadow-blog-post-shadow">
                      <div className='h-[322px] max-w-full w-[487px] relative '>
                       <Image 
                        src={blog.image} 
                        alt={blog.title} 
                        layout="fill" // required
                        className='shadow-blog-post-image-shadow'
                        />
                      </div>
                      <div className="date">

                      </div>
                      <h1 className="text-[#1E232C] font-[600] 
                      sm:text-[26px] leading-[1.8] capitalize opacity-[1] font-[Poppins] mt-3 text-[23px]">
                          {blog.title}
                      </h1>
                      <p className="py-3 text-[#1E232C] text-[18px] font-[300]">
                          {blog.post}
                      </p>
                      <div className="readmore flex mt-3 items-center">
                          <span className='bg-[#FF00F7] h-[2px] w-[87px] block'></span>
                          {/* link will replace it the p tag in a real life scenario */}
                          <p className='text-[#FF00F7] ml-3'>READ MORE</p>
                      </div>
                </div>
            })
        }
    </div>
  )
}

export default BlogPost