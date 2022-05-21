import React from 'react'


interface prop {
    label:string
    className:string
}

const Label = (prop:prop) => {
  return (
     <label
     className={prop.className}
       >
         {prop.label}
     </label>
  )
}

export default Label