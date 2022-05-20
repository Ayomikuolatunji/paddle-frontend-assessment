import React from 'react'
import { Button } from 'antd';


interface prop {
  // not needed here
  // onclick:()=>void
  className:string
}


const CustomButton = (prop:prop) => {

  return  <Button
      //  onClick={prop.onclick}
       className={prop.className}
  />
}

export default CustomButton