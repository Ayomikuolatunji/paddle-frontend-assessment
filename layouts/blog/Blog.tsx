import React from 'react'
import Footer from '../../components/footer/Footer'
import BlogPost from './BlogPost'
import Hero from './Hero'
import KnowMore from './KnowMore'
import RecentArticle from './RecentArticle'
import Search from './Search'

export default function Blog() {





  return (
    <>
        <Hero/>
        {/* the components wrapped in the div foldder have eqaul width and they need to behave the same for proper responsiveness */}
       <div className='sm:w-10/12 mx-auto w-full sm:px-0 px-3'>
          <Search/>
          <BlogPost/>
          <RecentArticle/>
       </div>
       {/* what to know more about metrics component */}
       <KnowMore/>
       <Footer/>
    </>
  )
}
