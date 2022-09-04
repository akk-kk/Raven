import React from 'react'

const TextBox = ({placeholder,action,type,val}) => {
   
  return (
    <>
    <div className="w-full">
        <input onChange={action} value={val}  type={type || "text"} className='w-full p-3 bg-gray-200/50 rounded-lg outline-none ' placeholder={placeholder} />
    </div>
    </>
  )
}

export default TextBox