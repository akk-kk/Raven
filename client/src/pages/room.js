import React, { useEffect, useRef, useState, useContext, useCallback } from 'react'
import SiderBar from '../components/SiderBar'
import GLOBAL_CONTEXT from '../_layout';
import { Peer } from 'peerjs'
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
const { io } = require("socket.io-client");

const Room = () => {
  // const params = useParams();
  const navigate = useNavigate()
  const { user } = useContext(GLOBAL_CONTEXT)
  const { answer, setAnswer } = useState(false);
  const [join, setjoin] = useState()
  const [usersData, setUserData] = useState([])
  const [activeTab, setActiveTab] = useState("Participants");
  const [ModalState, setModal] = useState(false);

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io(`${process.env.REACT_APP_API_URL}`)
    socketRef.current.on('connect', () => {
      console.log(`connection with socket`)
    })
    socketRef.current.on('connect_error', (e) => console.log(e.message, 'xxx'))

    const room = localStorage.getItem('room');
    console.log(room)

    socketRef.current.emit('join-room', { _id: user._id, room: room })

    socketRef.current.on('wants-to-join', ({ user: toJoinUser }, cb) => {
      //
      console.log(toJoinUser)
      setjoin(toJoinUser)
      setModal(true);


      // cb({accepted: true})
    })

    const data = JSON.parse(localStorage.getItem('Users'))
    if (data) {
      setUserData(data.users);
    } else {
      const data2 = []
      data2.push(user)
      setUserData(data2)
    }

    if (!user) {
      navigate('/join-meet')
    }

    return () => socketRef.current.disconnect()
  }, [])



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
                className={`${activeTab === "Participants" && "bg-white"
                  } p-3 cursor-pointer flex items-center justify-center rounded w-full h-12`}
              >
                Participants
              </div>
              <div
                onClick={() => setActiveTab("Chat")}
                className={`${activeTab === "Chat" && "bg-white"
                  } p-3 cursor-pointer flex items-center justify-center  rounded w-full h-12`}
              >
                Chat
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {usersData.map((item, i) => (
                <div className="flex justify-between cursor-pointer items-center gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={`${item.avatar}`}
                      className="w-10 h-10 rounded-full  inline-block"
                    />
                    <div className="text-lg">{item.username}</div>
                  </div>
                  <div className="bg-red-700 flex items-center justify-center w-8 h-8 rounded-full">

                    <img
                      src="/assets/muted.svg"
                      alt=""
                      className="inline-block w-4 h-4"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Modal
        className="max-w-[450px] w-full absolute left-1/3 rounded-lg translate-y-3/4 bg-white p-8 shadow-2xl"
        isOpen={ModalState}
        onRequestClose={() => setModal(false)}
        ariaHideApp={false}
      >
        <div className="flex items-center justify-center gap-4 flex-col">
          {join ? (
            <>
              {join.username}
              <img src={`${join.avatar}`} alt="" />
            </>) :
            (
              <h1>hello</h1>
            )}
          <button onClick={() => setAnswer(true)}>Allow</button>
          <button onClick={() => setAnswer(false)}>Not Allow</button>
        </div>
      </Modal>
    </>
  );
};

export default Room;
