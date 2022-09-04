import React from 'react'

const SiderBar = () => {
  return (
    <div className='flex flex-col items-center gap-12 bg-gray-200/50 w-24 py-4  fixed h-full top-0 left-0'>
      <img src="/assets/logo_icon.png" alt="icon" className="block w-12 object-contain" />
      <div className="flex w-full flex-col gap-12 min-h-[500px] items-center justify-center">
        <div className="w-full hover:border-r-4 flex items-center justify-center py-4 hover:border-primary cursor-pointer ">

          <img src="/assets/home.svg" alt="" className="block cursor-pointer" />
        </div>
        <div className="w-full hover:border-r-4 flex items-center justify-center py-4 hover:border-primary cursor-pointer ">

          <img src="/assets/add.svg" alt="" className="block cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default SiderBar