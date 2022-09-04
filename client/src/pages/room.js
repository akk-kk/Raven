
import {Peer} from 'peerjs'
import React, { useEffect, useState } from 'react'
import SiderBar from '../components/SiderBar'

const Room = () => {
  const [activeTab, setActiveTab] = useState("Participants");
  
  return (
    <>
      <div className="flex gap-8">
        <SiderBar />
        <div className="grid grid-cols-6  w-screen p-2">
          <div className="col-span-4">
             <video />

          </div>
          <div className="col-span-2 flex flex-col gap-4 bg-gray-200/30 rounded-lg h-[90vh] overflow-hidden p-4 ">
            <div className="grid grid-cols-2  gap-2">
              <div
                onClick={() => setActiveTab("Participants")}
                className={`${
                  activeTab == "Participants" && "bg-white"
                } p-3 cursor-pointer flex items-center justify-center rounded w-full h-12`}
              >
                Participants
              </div>
              <div
                onClick={() => setActiveTab("Chat")}
                className={`${
                  activeTab == "Chat" && "bg-white"
                } p-3 cursor-pointer flex items-center justify-center  rounded w-full h-12`}
              >
                Chat
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between cursor-pointer items-center gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src="https://source.unsplash.com/random"
                    className="w-10 h-10 rounded-full inline-block"
                  />
                  <div className="text-lg">Venu Choudhary</div>
                </div>
                <div className="bg-red-700 flex items-center justify-center w-8 h-8 rounded-full">

                <img
                  src="/assets/muted.svg"
                  alt=""
                  className="inline-block w-4 h-4"
                  />
                  </div>
              </div>
              <div className="flex justify-between cursor-pointer items-center gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src="https://source.unsplash.com/random"
                    className="w-10 h-10 rounded-full  inline-block"
                  />
                  <div className="text-lg">Venu Choudhary</div>
                </div>
                <div className="bg-red-700 flex items-center justify-center w-8 h-8 rounded-full">

                <img
                  src="/assets/muted.svg"
                  alt=""
                  className="inline-block w-4 h-4"
                  />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Room;
