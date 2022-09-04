import React from 'react'
import { GoogleLogin } from '@react-oauth/google';

// import { LogIn } from '../utils/authService';
const Landing = () => {
    return (
        <>

            <div className="flex justify-between">
                <div className="flex gap-2">
                    <img src='/assets/logo_icon.png' alt="icon" className='object-contain' />
                    <img src='/assets/logo.png' alt="icon" className='object-contain' />
                </div>
                <div className="flex gap-4">
                   
                    <button  className='border-2 rounded bg-transparent border-black text-lg hover:bg-black hover:text-white  w-32 h-12'>Log In</button>
                    <button className='border-2 rounded bg-black text-white border-black text-lg  w-32 h-12'>Sign Up</button>
                </div>
            </div>
            <section className='grid place-items-center grid-cols-12 min-h-[800px] gap-8'>
                <div className="flex flex-col gap-12 col-span-5 ">
                    <div className="text-7xl leading-loose leading-[81px]">

                        Connect <span className="text-primary">with</span> anyone, anytime, anywhere
                    </div>
                    <div className="text-4xl text-gray-700">Fast, realiable and secure conferancing with A3. </div>
                    <button className='bg-primary rounded h-16 hover:bg-primary-dark w-56 drop-shadow-3xl text-lg flex gap-2 items-center justify-center text-white'>
                        <img src='/assets/video.svg' />
                        Create meeting</button>
                </div>
                <div className="col-span-7">
                    <div className="flex flex-col gap-4">
                        <img src='/assets/shelf.png' className='block' />
                        <div className="flex gap-4">
                            <img src='/assets/run.png' className='block' />
                            <img src='/assets/clubs.png' className='block' />

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Landing