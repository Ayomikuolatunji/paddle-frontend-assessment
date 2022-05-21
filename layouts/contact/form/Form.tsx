import React from 'react'
import FormLogic from '../../../helpers/formLogic'
import InputBox from '../../../util/InputBox'
import TextInput from '../../../util/TextInput'

const Form:React.FC = () => {
    const {values,handleChange,handleTextarea}=FormLogic()
  

   


  return (
    <div className='w-full flex items-center flex-col h-[100vh] bg-[#0C0123]'>
        <div className="form-text my-16">
            <h1 className='text-[#ffffff] text-[40px] font-medium text-center '>Hey, we are still in the works, <br /> but you can send us a message!</h1>
        </div>
        <form>
             <div className="form-input w-full">
                 <TextInput 
                   name={"firstname"}
                   placeholder='Enter your First name'
                   className=''
                   value={values.firstname}
                   onChange={handleChange}
                 />
             </div>
             <div className="form-input">
             <TextInput 
                   name={"firstname"}
                   placeholder='Enter your First name'
                   className=''
                   value={values.firstname}
                   onChange={handleChange}
                 />
             </div>
             <div className="form-input">
             <TextInput 
                   name={"firstname"}
                   placeholder='Enter your First name'
                   className=''
                   value={values.firstname}
                   onChange={handleChange}
                 />
             </div>
             <div className="text-area">
                <InputBox
                    name={"firstname"}
                    placeholder='Enter your First name'
                    className=''
                    value={values.firstname}
                    onChange={handleTextarea}
                />
             </div>
        </form>
    </div>
  )
}

export default Form