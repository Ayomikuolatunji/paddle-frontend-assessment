import React from 'react'



interface prop {
  // not needed here
//   onSubmit:()=>void
  type:string
  className:string
  text:string
}


const SubmitBtn = (prop:prop) => {

  return  <button
    //    onClick={prop.onSubmit}
       className={prop.className}
       type={"submit"}
  >{prop.text}</button>
}

export default SubmitBtn