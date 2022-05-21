import React from 'react'
import FormLogic from '../../../helpers/formLogic'
import InputBox from '../../../util/InputBox'
import TextInput from '../../../util/TextInput'

const Form:React.FC = () => {
    const {values,handleChange}=FormLogic()
  

   


  return (
    <div>
        <div className="form-text">
            <h1>Hey, we are still in the works, but you can send us a message!</h1>
        </div>
        <form>
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
                
                />
             </div>
        </form>
    </div>
  )
}

export default Form