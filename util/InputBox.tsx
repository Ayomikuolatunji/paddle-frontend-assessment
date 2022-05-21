import React, { FormEvent } from 'react'
import { Input } from 'antd';

const { TextArea } = Input;

interface prop{
  value:string
  name:string
  onChange:(e:FormEvent<HTMLInputElement>)=>void
}

const InputBox = (prop:prop) => {
  return  (
    <TextArea rows={4} 
    value={prop.value}
    name={prop.name}
    onChange={(e)=>prop.onChange(e)}
 />
  )
}

export default InputBox