import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import TextBox from "../components/TextBox";

const WaitingScreen = () => {
  const userMediaRef = useRef(null);
  const [showVideo,setShowVideo]=useState(true);
  const [audio,setAudio]=useState(true);
  const [streamObj,setStreamObj]=useState()
  const getMedia = async () => {
    try {
      // stream  navigator.webkitGetUserMedia;
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setStreamObj(stream);
      /* use the stream */
      userMediaRef.current.srcObject = stream;
      userMediaRef.current.play();
    } catch (err) {
      /* handle the error */
      console.log(err);
    }
  };
  useEffect(() => {
    getMedia();
  }, []);


  const toggleVideo=(value)=>{
    streamObj.getVideoTracks()[0].enabled=value
    setShowVideo(value)
  }
  
  const toggleAudio=(value)=>{
    streamObj.getAudioTracks()[0].enabled=value
    setAudio(value)
  }

  return (
    <>
      <Navbar />
      <div className="flex items-center p-4 min-h-[700px]  justify-center w-full h-full">
        <div className="flex gap-8">
            <div className="relative">

          <video
            className="w-[600px]  rounded-xl"
            height="00"
            ref={userMediaRef}
            muted
            />
            <div className="gap-4 flex -mt-10 items-center justify-center">

            <button onClick={()=>toggleVideo(!showVideo) } 
            className={`${showVideo?"bg-primary":"bg-red-500"} flex items-center justify-center cursor-pointer text-white p-4 rounded-full w-20 h-20`}
            >
                {showVideo?<img src="/assets/cam_on.svg" className="w-6 object-contain"  />:<img src="/assets/cam_off.svg" className="w-6 object-contain" />}
            </button>
            <div onClick={()=>toggleAudio(!audio)} className={ `w-20 cursor-pointer h-20 bg-red-500 p-4 flex items-center justify-center rounded-full` }>
             {audio ? <img src="/assets/unmute.svg"  /> :<img src="/assets/muted.svg" className="block w-6 object-contain" />}
            </div>

            </div>
            </div>
          <div className="flex flex-col justify-center gap-4">
            <div className="text-xl">
              Hold on for a second! We are settig up your meeting
            </div>
            <TextBox placeholder={"Enter code"} />
            <div className="flex items-center gap-4">
              <button className="block bg-primary items-center justify-center flex w-48 gap-4 h-12 text-white rounded-full">
                Ask to join
                <div className="border-2 border-t-white animate-spin border-primary     w-6 h-6 rounded-full"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaitingScreen;
