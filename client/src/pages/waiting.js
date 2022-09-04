import React, { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'

const WaitingScreen = () => {
    const userMediaRef=useRef();
    const getMedia=async ()=>{
        let stream = null;

  try {
    stream = navigator.getUserMedia || navigator.webkitGetUserMedia;
    await stream({video:{userFacing:true},audio:true},(UserMedia)=>{
    
    })
    /* use the stream */
  } catch (err) {
    /* handle the error */
    console.log(err)
  }
    }
    useEffect(()=>{
        
    },[])
  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center w-full h-full">
    
    </div>
    </>
  )
}

export default WaitingScreen