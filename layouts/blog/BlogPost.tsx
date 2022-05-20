import React from 'react'
import { blogItems } from '../../helpers/blogItems'

const BlogPost:React.FC=()=>{


  return (
    <div className='grid sm:grid-cols-3 grid-cols-1'>
        {
            blogItems.map((blog,index)=>{
                return <div key={index} className="shadow-[blog-post-shadow]">

                </div>
            })
        }
    </div>
  )
}

export default BlogPost