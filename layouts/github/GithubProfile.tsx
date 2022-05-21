import React from 'react'



interface IUserData {
    profile:{
        id:number | string
        name:string
    }
}


const GithubProfile = (prop:IUserData) => {

  return (
    <div>GithubProfile {prop.profile.id} {prop.profile.name}</div>
  )
}

export default GithubProfile