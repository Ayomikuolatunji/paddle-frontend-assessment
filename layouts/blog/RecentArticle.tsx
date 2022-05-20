import React from 'react'
import { articleItems } from '../../helpers/blogItems'

const RecentArticle = () => {
  return (
    <div className='mt-[100px]'>
         <div className="intro sm:w-[50%] w-full">
             <h1 className='text-[#1E232C] font-medium font-[Poppins] opacity-[1px] tracking-normal sm:text-[52px] text-[40px]'>Recent Articles</h1>
             <p className='text-[#000000] font-normal opacity-[0.8] capitalize sm:text-[23px] text-[18px] leading-[1.5]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
         </div>
         {/* grid box content */}
         <div  className='grid sm:grid-cols-3 gap-10 grid-cols-1 mt-24'>
              {
                  articleItems.map((article,index)=>{
                      return <div key={index} className="h-[auto] p-6 shadow-blog-post-shadow">
                      <div className="date">

                      </div>
                      <h1 className="text-[#1E232C] font-[600] 
                      sm:text-[26px] leading-[1.8] capitalize opacity-[1] font-[Poppins] mt-3 text-[23px]">
                          {article.title}
                      </h1>
                      <p className="py-3 text-[#1E232C] text-[18px] font-[300]">
                          {article.post}
                      </p>
                      <div className="readmore flex mt-3 items-center">
                          <span className='bg-[#FF00F7] h-[2px] w-[87px] block mt-2'></span>
                          {/* link will replace it the p tag in a real life scenario */}
                          <p className='text-[#FF00F7] ml-3'>READ MORE</p>
                      </div>
                      </div>
                  })
              }
         </div>
         <div className="btn my-6 text-center">
            <button className='bg-[#7C0FD5] shadow-post-btn-shadow opacity-[1] text-[#fff] px-10 py-8 uppercase rounded-[50px]'>
                load more
            </button>
         </div>
    </div>
  )
}


export default RecentArticle