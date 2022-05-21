import React, { FormEvent, useState } from "react"



interface inputInterface {
    firstname:string
    lastname:string
    email:string
    topic:string
}


const FormLogic=()=>{
    const [values,setValues]=useState<inputInterface>({
        firstname:"",
        lastname:"",
        email:"",
        topic:""
    })
     

    const handleChange=(e:React.FormEvent<HTMLInputElement>)=>{
        const {name, value} = e.currentTarget;
        setValues({...values, [name]:value})
    }

    return {
         values,
        handleChange
    }
}


export default FormLogic