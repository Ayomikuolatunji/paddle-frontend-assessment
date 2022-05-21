import React, { useEffect } from 'react'
import { fetchProfiles } from '../../redux/githubSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hook'



const GitHubPage:React.FC = () => {
     const dispatch=useAppDispatch()
     const {profiles,loading}=useAppSelector(state=>state.profiles)
     console.log(profiles,loading);



    // fetch data from redux store 
    useEffect(()=>{
      dispatch(fetchProfiles())
    },[])


  return (
    <div>GitHubPage</div>
  )
}

export default GitHubPage