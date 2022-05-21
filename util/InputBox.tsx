import React, { FormEvent } from 'react'
import { Input } from 'antd';

interface prop{
  placeholder:string
  className:string
  value:string
  name:string
  onChange:(e:FormEvent<HTMLTextAreaElement>)=>void
}


const {TextArea}=Input

function TextInput(prop:prop) {
  return (
    <Input.TextArea
      name={prop.name}
      placeholder={prop.placeholder} 
      className={prop.className}
      value={prop.value}
      onChange={(e)=>prop.onChange(e)}
    />
  )
}

export default TextInput