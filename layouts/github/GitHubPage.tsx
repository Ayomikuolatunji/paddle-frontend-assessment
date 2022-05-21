import React, { useEffect, useState } from 'react'
import { fetchProfiles } from '../../redux/githubSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hook'



const GitHubPage:React.FC = () => {
    const [pageNum,setPageNum]=useState(1)
     const dispatch=useAppDispatch()
     const {profiles,loading}=useAppSelector(state=>state.profiles)
     console.log(profiles,loading);



    // fetch data from redux store 
    useEffect(()=>{
      dispatch(fetchProfiles(pageNum))
    },[])


  return (
    <div>

    </div>
  )
}

export default GitHubPage