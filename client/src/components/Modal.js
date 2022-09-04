import React from 'react'
const Modal = ({ content, show ,setShow}) => {
    if(!show){
        return (<></>)
    }
    return (
        <>
            <div  className="bg-gray-300/60 z-20 fixed flex items-center justify-center top-0 w-full h-full">

                <div className='bg-gray-100 max-w-md p-8 w-full min-h-[200px] rounded-xl shadow-2xl'>
                    {content}

                </div>
            </div>
        </>
    )
}

export default Modal