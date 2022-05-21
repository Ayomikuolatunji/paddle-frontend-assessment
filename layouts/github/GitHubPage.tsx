import React, { useEffect } from 'react'
import { fetchProfiles } from '../../redux/githubSlice'
import { useAppDispatch } from '../../redux/hook'



const GitHubPage:React.FC = () => {
     const dis=useAppDispatch()

    useEffect(()=>{
      dis(fetchProfiles())
    },[])

    
  return (
    <div>GitHubPage</div>
  )
}

export default GitHubPage