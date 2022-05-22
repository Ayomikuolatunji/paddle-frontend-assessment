import React from 'react'
import { articleItems } from '../../helpers/blogItems'

const RecentArticle:React.FC = () => {

//    article grid 


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
                      <div className="date my-3 ">
                          <p className='text-gray-500 tracking-[0.42px] opacity-[0.53]'>{article.date}{article.feature}</p>
                      </div>
                      {/* articel title */}
                      <h1 className="text-[#1E232C] font-[600] 
                      sm:text-[26px] leading-[1.8] capitalize opacity-[1] font-[Poppins] mt-3 text-[23px]">
                          {article.title}
                      </h1>
                      {/* article post */}
                      <p className="py-3 text-[#1E232C] text-[18px] font-[300]">
                          {article.post}
                      </p>
                      {/* button to read more */}
                      <div className="readmore flex mt-3 items-center">
                          <span className='bg-[#FF00F7] h-[2px] w-[87px] block'></span>
                          {/* link will replace it the p tag in a real life scenario */}
                          <p className='text-[#FF00F7] ml-3 cursor-pointer'>READ MORE</p>
                      </div>
                      </div>
                  })
              }
         </div>
         {/* Button to load more posts */}
         <div className="btn my-10 text-center">
            <button className='bg-[#7C0FD5] shadow-post-btn-shadow opacity-[1] text-[#fff] px-12 py-4 uppercase rounded-[50px] text-[21px]'>
                load more
            </button>
         </div>
    </div>
  )
}


export default RecentArticle