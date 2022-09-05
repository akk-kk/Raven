import React, { useCallback, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';


const Landing = () => {

    const navigate = useNavigate()
    const createMeeting = async () => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/rooms/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        })
        if (res.status === 201) {
            const result = await res.json();
            console.log(result);
        }
    }

    const joinMeeting = async () => {
        navigate('/join-meet')
    }


   

    return (
        <>
        <div className="container">

            <Navbar />
            <section className='grid place-items-center grid-cols-1 sm:grid-cols-12 min-h-[800px] gap-8'>
                <div className="flex flex-col sm:gap-12 col-span-6 lg:col-span-7 xl:col-span-5 ">
                    <div className=" text-lg  sm:text-4xl lg:text-5xl xl:text-7xl lg:leading-loose lg:leading-[51px] xl:leading-[71px]">

                        Connect <span className="text-primary">with</span> anyone, anytime, anywhere
                    </div>
                    <div className="sm:text-2xl xl:text-4xl text-gray-700">Fast, realiable and secure conferancing with A3. </div>
                    <div className="flex sm:flex-row gap-2 lg:gap-4">

                        <button className='bg-primary rounded h-12 text-sm lg:h-16 hover:bg-primary-dark    w-40 lg:w-56 drop-shadow-3xl lg:text-lg flex gap-2 items-center justify-center text-white' onClick={createMeeting}>
                            <img src='/assets/video.svg' className='w-6 object-contain' />
                            Create meeting
                        </button>
                        <button className='border-2 border-black h-12 text-sm rounded lg:h-16 hover:shadow-xl  w-40 lg:w-56 drop-shadow-3xl lg:text-lg flex gap-2 items-center justify-center text-black' onClick={joinMeeting}>
                            <img src='/assets/join.svg' className='w-6 object-contain'/>
                            Join meeting
                        </button>
                    </div>
                </div>
                <div className="col-span-6 lg:col-span-5  xl:col-span-7">
                    <div className="flex flex-col gap-4">
                        <img src='/assets/shelf.png' className='block' />
                        <div className="flex gap-4">
                            <img src="/assets/2gther.png" alt="" className="block w-full object-contain" />
                        </div>
                    </div>
                </div>

            </section>
        </div>
    
        </>
    )
}

export default Landing