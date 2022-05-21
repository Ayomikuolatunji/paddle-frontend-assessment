import React, { FormEvent, useState } from "react"



interface inputInterface {
    firstname:string
    lastname:string
    email:string
    topic:string
}
type InputProps = ({ // The discriminated union
    type?: "text";
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} | {
    type: "textarea";
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
})


const FormLogic=()=>{
    const [values,setValues]=useState<inputInterface>({
        firstname:"",
        lastname:"",
        email:"",
        topic:""
    })
     

    const handleChange=(event:React.FormEvent<HTMLInputElement>)=>{
        const {name, value} = event.currentTarget;
        setValues({...values, [name]:value})
    }

    return {
         values,
        handleChange
    }
}


export default FormLogic