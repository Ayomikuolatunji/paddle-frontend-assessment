import React, { useEffect, useState } from 'react'
import { fetchProfiles } from '../../redux/githubSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import Loader from '../../util/Loader'
import GithubProfile from './GithubProfile'


export interface IUserData {
    id: number; // ID should not be part of the data
    name: string;
  }
  interface fetch {
      items:[]
      total_count:number | string
      incomplete_results:boolean
  }[]
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
    },[])


  return (
    <div>
         {
             loading ? 
             <Loader/> : 
             <div>
                 {
                    profiles.map((profile:IUserData)=>{
                        return  <GithubProfile profile={profile} key={profile.id}/>
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
