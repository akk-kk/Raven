import React, { useEffect } from 'react'
import { useGoogleOneTapLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode'


const Landing = () => {

    useGoogleOneTapLogin({
        onSuccess: credentialResponse => {
            handleGoogleLogin(credentialResponse)
        },
        onError: () => {
            console.log('Login Failed')
        }
    });

    const handleGoogleLogin = async (response) => {
        const token = response.credential
        const decodeToken = jwtDecode(token)
        console.log(decodeToken)
        const { name, picture } = decodeToken
        const res = await fetch(`${process.env.REACT_APP_API_URL}/users/google`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                username: name,
                avatar : picture
            })
            
        })
    }

    const createMeeting = async ()=>{
        const res = await fetch(`${process.env.REACT_APP_API_URL}/rooms/create`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            credentials: "include"
        })

        if(res.status === 200){
            const result = await res.json();
            console.log(result);
        }
    }

    return (
        <>

            <div className="flex justify-between">
                <div className="flex gap-2">
                    <img src='/assets/logo_icon.png' alt="icon" className='object-contain' />
                    <img src='/assets/logo.png' alt="icon" className='object-contain' />
                </div>
                <div className="flex gap-4">

                    <button className='border-2 rounded bg-transparent border-black text-lg hover:bg-black hover:text-white  w-32 h-12'>Log In</button>
                    <button className='border-2 rounded bg-black text-white border-black text-lg  w-32 h-12'>Sign Up</button>
                </div>
            </div>
            <section className='grid place-items-center grid-cols-12 min-h-[800px] gap-8'>
                <div className="flex flex-col gap-12 col-span-5 ">
                    <div className="text-7xl leading-loose leading-[81px]">

                        Connect <span className="text-primary">with</span> anyone, anytime, anywhere
                    </div>
                    <div className="text-4xl text-gray-700">Fast, realiable and secure conferancing with A3. </div>
                    <button className='bg-primary rounded h-16 hover:bg-primary-dark w-56 drop-shadow-3xl text-lg flex gap-2 items-center justify-center text-white' onClick={createMeeting}>
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