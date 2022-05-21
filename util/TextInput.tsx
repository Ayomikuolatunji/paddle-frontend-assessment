import React from 'react'
import { Input } from 'antd';

interface prop{
  placeholder:string
  className:string
  value:string
  onChnage:(e: string)=>void
}


function TextInput(prop:prop) {
  return (
    <Input 
      placeholder={prop.placeholder} 
      className={prop.className}
      value={prop.value}
      onChange={(e)=>prop.onChnage(e.target.value)}
    />
  )
}

export default TextInput