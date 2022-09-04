import React from 'react'
import Modal from './components/Modal'

const GLOBAL_CONTEXT = React.createContext();


export const Layout = ({ children }) => {
 
  const [user,setUser]=React.useState();
  return (
    <>
      <GLOBAL_CONTEXT.Provider  value={{setUser,user}}>
       
        <div className=" font-poppins p-5">
          {children}
        </div>
      </GLOBAL_CONTEXT.Provider>
    </>
  )
}

export default GLOBAL_CONTEXT