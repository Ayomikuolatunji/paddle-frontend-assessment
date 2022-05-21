import React from 'react'



interface IUserData {
    profile:{
        id:number | string
        name:string
        stargazers_count:number 
    }
}


const GithubProfile = (prop:IUserData) => {

  return (
    <div key={prop.profile.id} className="w-[75%] shadow-md mx-auto">
         
    </div>
  )
}

export default GithubProfile