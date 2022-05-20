import React from 'react'
import { Input } from 'antd';

interface prop{
  placeholder:string
  className:string
}


function TextInput(prop:prop) {
  return (
    <Input 
      placeholder={prop.placeholder} 
      className={prop.className}
    />
  )
}

export default TextInput