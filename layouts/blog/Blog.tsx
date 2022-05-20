import React from 'react'
import BlogPost from './BlogPost'
import Hero from './Hero'
import KnowMore from './KnowMore'
import RecentArticle from './RecentArticle'
import Search from './Search'

export default function Blog() {
  return (
    <>
       <div className='sm:w-10/12 mx-auto w-full sm:px-0 px-3'>
          <Hero/>
          <Search/>
          <BlogPost/>
          <RecentArticle/>
       </div>
       {/* what to know more about metrics component */}
       <KnowMore/>
    </>
  )
}
