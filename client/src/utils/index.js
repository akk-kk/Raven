import React from 'react'


export const useForm=(initial)=>{
    const [value,setValue]=React.useState(initial || "");
    const handleChange=(e)=>{
        setValue(e.target.value)
    }
    return {
        value,
        onChange:handleChange
    }
}