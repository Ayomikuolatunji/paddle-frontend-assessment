import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'
import React from 'react'



interface IUserData {
    profile:{
        id:number | string
        name:string
        stargazers_count:number 
        freeCodeCamp:string
        description:string
        open_issues_count:string
        owner:{
          avatar_url:string
        }
    }
}


const GithubProfile = (prop:IUserData) => {

  return (
    <div key={prop.profile.id} className="w-[50%] my-3 p-2 shadow-md mx-auto flex  items-center">
         <div className="image w-[270px] h-[150px] relative">
             <Image 
             src={prop.profile.owner.avatar_url} 
             alt={prop.profile.name}  
             layout="fill"
             className='rounded-md'
             />
         </div>
         <div className="details ml-3">
             <h1 className='mb-3'>{prop.profile.name}</h1>
             <p className='mb-3'>{prop.profile.description}</p>
             <div className="repo-detail flex">
               <p className="star p-4 shadow-lg border-2">
                  {prop.profile.stargazers_count}
                  <AiFillStar className='text-yellow-400 inline '/>
               </p>
               <p className="star">
                  {prop.profile.open_issues_count}  
               </p>
             </div>
         </div>
    </div>
  )
}

export default GithubProfile