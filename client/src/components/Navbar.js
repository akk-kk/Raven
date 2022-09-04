
import React, { useContext, useCallback, useEffect, useState } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import GLOBAL_CONTEXT from '../_layout';
import TextBox from '../components/TextBox';
import { useForm } from '../utils';
import Modal from 'react-modal';
import jwtDecode from 'jwt-decode';
import {useGoogleOneTapLogin} from '@react-oauth/google'
import {Login,Register} from '../utils/authService'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        width: "300px",
        transform: 'translate(-50%, -50%)',
        width: "fit-content",
        height: "fit-content"
    },
};


const Navbar = () => {
    const username = useForm("");
    const password = useForm("");
    const [namemodal, setNameModal] = useState(false);
    const [registerModal, setRigsterModal] = useState(false);
    const { setContent, setShow, user, setUser, show, content } = useContext(GLOBAL_CONTEXT)

    const userData = useCallback(async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })


            if (res.status === 200) {
                const result = await res.json();
                setUser(result)
            } else if (res.status === 401) {
                console.log("test")
            }
        } catch (err) {
            console.log(err)
        }
    })

    useEffect(() => {
        userData()
    }, [])


    useGoogleOneTapLogin({
        onSuccess: credentialResponse => {
            if (!user) {
                handleGoogleLogin(credentialResponse)
            }
        },
        onError: () => {
            console.log('Login Failed')
        }
    })

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
                avatar: picture
            })
        })
    }


    const openLoginModel = (e) => {
        setNameModal(true);
    };


    const openRegisterModel = (e) => {
        setRigsterModal(true);
    };


    return (
        <>
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <img src='/assets/logo_icon.png' alt="icon" className='object-contain' />
                    <img src='/assets/logo.png' alt="icon" className='object-contain' />
                </div>
                <div className="flex gap-4">
                    {!user && <> <button onClick={(e) => { openLoginModel(e);console.log(e) }} className='border-2 rounded bg-transparent border-black text-lg hover:bg-black hover:text-white  w-32 h-12'>Log In</button>
                        <button onClick={(e) => { openRegisterModel(e) }} className='border-2 rounded bg-black text-white border-black text-lg  w-32 h-12'>Sign Up</button></>}
                    {user && <div className="w-12 h-12 rounded-full bg-black"><img src={`${user.avatar}`} className="rounded-full" /></div>}
                </div>
            </div>
            <Modal
                style={{ width: "fit-content", height: "fit-content" }}
                isOpen={namemodal}
                onRequestClose={() => setNameModal(false)}
            >
                <div className="flex items-center justify-center gap-4 flex-col">
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                        useOneTap
                        auto_select
                        theme='filled_black'
                        size='large'
                        width="400px"
                        logo_alignment='left'
                    />
                    <div className="text-lg">OR</div>
                    <div className="flex w-full flex-col gap-2">

                        <TextBox placeholder={"username"} action={(e) => username.onChange(e)} />
                        <TextBox placeholder={"password"} action={(e) => password.onChange(e)} />
                    </div>
                    <button className='border-2 rounded bg-transparent border-black text-lg hover:bg-black hover:text-white  w-full h-12' onClick={() => Login(username.value, password.value)}>Log In</button>
                    <div className="text-sm">Don't have an account? <span onClick={(e) => { setNameModal(false); openRegisterModel(e); }} className="cursor-pointer hover:underline">
                        Create one
                    </span>
                    </div>
                </div>
            </Modal>
            <Modal
                style={{ width: "fit-content" }}
                isOpen={registerModal}
                onRequestClose={() => setRigsterModal(false)}
            >
                <div className="flex items-center justify-center gap-4 flex-col">
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                        useOneTap
                        auto_select
                        theme='filled_black'
                        size='large'
                        width="400px"
                        logo_alignment='left'
                        text='continue_with'
                    />
                    <div className="text-lg">OR</div>
                    <div className="flex w-full flex-col gap-2">

                        <TextBox placeholder={"username"} action={(e) => username.onChange(e)} />
                        <TextBox placeholder={"password"} action={(e) => password.onChange(e)} />
                    </div>
                    <button className='text-white rounded bg-black text-lg  w-full h-12' onClick={() => Register(username.value, password.value)}>Sign Up</button>
                    <div className="text-sm"> Already have an account. <span className="cursor-pointer hover:underline" onClick={(e) => { openLoginModel(e); setRigsterModal(false) }}>Log in</span>
                    </div>
                </div>
            </Modal>
        </>
    )
}





export default Navbar