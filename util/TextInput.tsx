import React from 'react'
import { Input } from 'antd';

interface prop{
  placeholder:string
  className:string
  value:string
  name:string
  onChange:(e:React.FormEvent<HTMLInputElement>)=>void
}


function TextInput(prop:prop) {
  return (
    <Input 
      name={prop.name}
      placeholder={prop.placeholder} 
      className={prop.className}
      value={prop.value}
      onChange={(e)=>prop.onChange(e)}
    />
  )
}

export default TextInput