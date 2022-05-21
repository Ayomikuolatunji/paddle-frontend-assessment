import React from 'react'
import FormLogic from '../../../helpers/formLogic'
import CustomButton from '../../../util/CustomButton'
import InputBox from '../../../util/InputBox'
import Label from '../../../util/Label'
import TextInput from '../../../util/TextInput'

const Form:React.FC = () => {
    const {values,handleChange,handleTextarea}=FormLogic()
  

   


  return (
    <div className='w-full h-[100vh] flex items-center flex-col bg-[#0C0123]'>
        <div className="form-text my-12">
            <h1 className='text-[#ffffff] text-[25px] font-medium text-center '>Hey, we are still in the works, <br /> but you can send us a message!</h1>
        </div>
        <form className='sm:w-10/12 w-full sm:px-0 px-4 mx-auto flex-col'>
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
             <div className="form-input w-full mb-3">
                 <Label 
                   className='block text-[#ffffff] my-4 text-normal text-[21px]'
                   label='Last name'
                 />
                 <TextInput 
                   name={"lastname"}
                   placeholder='Enter Your Last Name'
                   className='w-full rounded-[15px] p-4 indent-4'
                   value={values.lastname}
                   onChange={handleChange}
                 />
             </div>
             <div className="form-input w-full mb-3">
                 <Label 
                   className='block text-[#ffffff] my-4 text-normal text-[21px]'
                   label='Email address'
                 />
                 <TextInput 
                   name={"email"}
                   placeholder='Enter your email address'
                   className='w-full rounded-[15px] p-4 indent-4'
                   value={values.email}
                   onChange={handleChange}
                 />
             </div>
             <div className="form-input w-full mb-3">
                <Label 
                label='Tell us what you need help with:'  className='block text-[#ffffff] my-5 text-normal text-[21px]'
                />
                <InputBox
                    name={"topic"}
                    placeholder='Enter your First name'
                    className='w-full rounded-[15px] indent-5 pt-5'
                    value={values.topic}
                    onChange={handleTextarea}
                />
             </div>
             <div className="submit flex text-left justify-start mt-9">
                 <CustomButton
                   className='shadow-contact-shadow bg-[#271AC1] text-[#ffffff] rounded-[20px] px-8 py-3'
                   text='submit'
                 />
             </div>
        </form>
    </div>
  )
}

export default Form