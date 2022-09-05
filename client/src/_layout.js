import React from 'react'

const GLOBAL_CONTEXT = React.createContext();


export const Layout = ({ children }) => {
 
  const [user,setUser]=React.useState();
  const [roomData,setRoomData] = React.useState();
  return (
    <>

      <GLOBAL_CONTEXT.Provider  value={{setUser,user,roomData,setRoomData}}>
        <div className=" font-poppins p-5">
          {children}
        </div>
      </GLOBAL_CONTEXT.Provider>
    </>
  )
}

export default GLOBAL_CONTEXT