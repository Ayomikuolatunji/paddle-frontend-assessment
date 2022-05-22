import React from 'react'
import Footer from '../../components/footer/Footer'
import KnowMore from '../../components/know-more/KnowMore'
import BlogPost from './BlogPost'
import Hero from './Hero.Blog'
import RecentArticle from './RecentArticle'
import Search from './Search'


// blog components exported to /pages/index.tsx
export default function Blog() {





  return (
    <>
        {/*hero , knowMore and RecentArticle  */}
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
