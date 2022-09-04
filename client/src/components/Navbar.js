import React,{useContext, useState} from 'react'
import { GoogleLogin } from '@react-oauth/google';
import GLOBAL_CONTEXT from '../_layout';
import TextBox from '../components/TextBox';
import { useForm } from '../utils';
import Modal from './Modal';
const Navbar = () => {
    const [show, setShow] = React.useState(false);
    const [content, setContent] = React.useState();
    const {user,setUser} = useContext(GLOBAL_CONTEXT)
    const username=useForm("");
    const password=useForm("");
    const validate=(e)=>{
        e.preventDefault();
        console.log(username.val)
    }
    const REGISTER = (<>
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
            <TextBox placeholder={"username"} type="text" action={username.onChange} val={username.value}/>
              
            </div>
            <button onClick={validate} className='text-white rounded bg-black text-lg  w-full h-12'>Sign Up</button>
            <div className="text-sm"> Already have an account. <span className="cursor-pointer hover:underline" onClick={() => setContent(LOGIN)}>Log in</span>
            </div>
        </div>
    </>)
    const LOGIN = (<>
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

                <TextBox placeholder={"username"} />
                <TextBox placeholder={"password"} />
            </div>
            <button onClick={validate} className='border-2 rounded bg-transparent border-black text-lg hover:bg-black hover:text-white  w-full h-12'>Log In</button>
            <div className="text-sm">Don't have an account? <span onClick={() => setContent(REGISTER)} className="cursor-pointer hover:underline">
                Create one
            </span>
            </div>
        </div>
    </>)

    return (
        <>
         {show && <Modal content={content} setShow={setShow} show={show}/>}
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <img src='/assets/logo_icon.png' alt="icon" className='object-contain' />
                    <img src='/assets/logo.png' alt="icon" className='object-contain' />
                </div>
                <div className="flex gap-4">
                   {!user &&<> <button onClick={() => { setContent(LOGIN); setShow(true); }} className='border-2 rounded bg-transparent border-black text-lg hover:bg-black hover:text-white  w-32 h-12'>Log In</button>
                    <button onClick={() => { setContent(REGISTER); setShow(true); }} className='border-2 rounded bg-black text-white border-black text-lg  w-32 h-12'>Sign Up</button></>}
                 {user &&  <div className="w-12 h-12 rounded-full bg-black"></div>}
                </div>
            </div>
        </>
    )
}

export default Navbar