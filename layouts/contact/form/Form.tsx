import React from 'react'
import FormLogic from '../../../helpers/formLogic'
import InputBox from '../../../util/InputBox'
import Label from '../../../util/Label'
import TextInput from '../../../util/TextInput'

const Form:React.FC = () => {
    const {values,handleChange,handleTextarea}=FormLogic()
  

   


  return (
    <div className='w-full h-[100%] flex items-center flex-col bg-[#0C0123]'>
        <div className="form-text my-16">
            <h1 className='text-[#ffffff] text-[40px] font-medium text-center '>Hey, we are still in the works, <br /> but you can send us a message!</h1>
        </div>
        <form className='w-10/12 mx-auto flex items-center flex-col'>
             <div className="form-input w-full mb-4">
                 <Label 
                   className='block text-[#ffffff] my-5 text-normal text-[21px]'
                   label='First name'
                 />
                 <TextInput 
                   name={"firstname"}
                   placeholder='Enter Your First Name'
                   className='w-full rounded-[15px] p-5 indent-4'
                   value={values.firstname}
                   onChange={handleChange}
                 />
             </div>
             <div className="form-input w-full mb-4">
                 <Label 
                   className='block text-[#ffffff] my-5 text-normal text-[21px]'
                   label='Last name'
                 />
                 <TextInput 
                   name={"lastname"}
                   placeholder='Enter Your Last Name'
                   className='w-full rounded-[15px] p-5 indent-4'
                   value={values.lastname}
                   onChange={handleChange}
                 />
             </div>
             <div className="form-input w-full mb-4">
                 <Label 
                   className='block text-[#ffffff] my-5 text-normal text-[21px]'
                   label='Email address'
                 />
                 <TextInput 
                   name={"email"}
                   placeholder='Enter your email address'
                   className='w-full rounded-[15px] p-5 indent-4'
                   value={values.firstname}
                   onChange={handleChange}
                 />
             </div>
             <div className="form-input w-full mb-4">
                <InputBox
                    name={"firstname"}
                    placeholder='Enter your First name'
                    className='w-full rounded-[15px] p-5 indent-4'
                    value={values.firstname}
                    onChange={handleTextarea}
                />
             </div>
        </form>
    </div>
  )
}

export default Form