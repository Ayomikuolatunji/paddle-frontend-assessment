import React, { useEffect, useState } from 'react'
import { fetchProfiles } from '../../redux/githubSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import Loader from '../../util/Loader'
import GithubProfile from './GithubProfile'


const GitHubPage = () => {
    const [pageNum,setPageNum]=useState(1)
     const dispatch=useAppDispatch()
     const profiles=useAppSelector(state=>state.profiles.profiles)
     const loading=useAppSelector(state=>state.profiles.loading)
     console.log(profiles);


    // setpage num
    
    // fetch data from redux store 
    useEffect(()=>{
      dispatch(fetchProfiles(pageNum))
    },[pageNum])

   useEffect(()=>{
    window.onscroll = function (){
      if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
          setPageNum((prevNum)=>prevNum+1)
      }
    }
   })

  return (
    <div>
         {
             loading ? 
             <Loader/> : 
             <div>
                 {
                    profiles.map((profile,index)=>{
                        return  <GithubProfile profile={profile} key={index}/>
                    })
                 }
             </div>
         }
    </div>
  )
}

export default GitHubPage

function profiles(profiles: any, loading: boolean) {
    throw new Error('Function not implemented.')
}
