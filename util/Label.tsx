import React from 'react'


interface prop {
    label:string
}

const Label = (prop:prop) => {
  return (
     <label>
         {prop.lable}
     </label>
  )
}

export default Label