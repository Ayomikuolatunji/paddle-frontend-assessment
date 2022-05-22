import Image from 'next/image'
import { AiFillStar,AiOutlineIssuesClose } from 'react-icons/ai'



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

    console.log(prop)

  return (
    <div key={prop.profile.id} className="sm:w-[50%] w-[90%] my-3 p-2 shadow-md mx-auto flex items-center">
         <div className="image w-[30%]">
            <div className='relative sm:w-[150px] lg:w-[250px] md:w-[150px] w-[120px] h-[160px]'>
              <Image 
              src={prop.profile.owner.avatar_url} 
              alt={prop.profile.name}  
              layout="fill"
              className="object-cover w-full rounded-t-lg md:h-auto md:rounded-none md:rounded-l-lg"
              />
            </div>
         </div>
         <div className="details ml-3 w-[70%]">
             <h1 className='mb-3'>{prop.profile.name}</h1>
             <p className='mb-3'>
               {prop.profile.description}
             </p>
             <div className="repo-detail flex items-center leading-normal">
               <p className="star p-3 shadow-lg  border-2 border-gray-500">
                  {prop.profile.stargazers_count}
                  <AiFillStar className='text-yellow-400 inline text-3xl'/>
               </p>
               <p className="star p-3 shadow-lg border-2 ml-2  
               border-gray-500">
                  {prop.profile.open_issues_count}  
                  <AiOutlineIssuesClose className='text-red-400 inline text-3x'/>
               </p>
             </div>
         </div>
    </div>
  )
}

export default GithubProfile