
import React, { useContext } from 'react'
import { useGoogleOneTapLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode'
import Navbar from '../components/Navbar';
import GLOBAL_CONTEXT from '../_layout';

const Landing = () => {

   const {setUser,user}=useContext(GLOBAL_CONTEXT);
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
            <Navbar/>
            <section className='grid place-items-center grid-cols-12 min-h-[800px] gap-8'>
                <div className="flex flex-col gap-12 col-span-5 ">
                    <div className="text-7xl leading-loose leading-[81px]">

                        Connect <span className="text-primary">with</span> anyone, anytime, anywhere
                    </div>
                    <div className="text-4xl text-gray-700">Fast, realiable and secure conferancing with A3. </div>
                    <div className="flex gap-4">

                    <button className='bg-primary rounded h-16 hover:bg-primary-dark w-56 drop-shadow-3xl text-lg flex gap-2 items-center justify-center text-white' onClick={createMeeting}>
                        <img src='/assets/video.svg' />
                        Create meeting
                    </button>
                    <button className='border-2 border-black  rounded h-16 hover:shadow-xl w-56 drop-shadow-3xl text-lg flex gap-2 items-center justify-center text-black' onClick={createMeeting}>
                        <img src='/assets/join.svg' />
                        Join meeting
                    </button>
                    </div>
                </div>
                <div className="col-span-7">
                    <div className="flex flex-col gap-4">
                        <img src='/assets/shelf.png' className='block' />
                        <div className="flex gap-4">
                            <img src="/assets/2gther.png" alt="" className="block w-full object-contain" />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Landing