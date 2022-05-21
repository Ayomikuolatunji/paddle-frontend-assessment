import React from 'react'
import { Input } from 'antd';

const { TextArea } = Input;

interface prop{
  value:string
  onChange:(e: string)=>void
}

const TextBox = (prop:prop) => {
  return   <TextArea rows={4} 
     value={prop.value}
     onChange={(e)=>prop.onChange(e.target.value)}
  />
}

export default TextArea