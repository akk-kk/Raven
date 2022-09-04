import React from 'react'
import Modal from './components/Modal'

const GLOBAL_CONTEXT = React.createContext();


export const Layout = ({ children }) => {
  const [show, setShow] = React.useState(false);
  const [content, setContent] = React.useState();
  const [user,setUser]=React.useState();
  return (
    <>
      <GLOBAL_CONTEXT.Provider  value={{show,setShow,content,setContent,setUser,user}}>
        <Modal content={content} setShow={setShow} show={show}/>
        <div className="container font-poppins p-5">
          {children}
        </div>
      </GLOBAL_CONTEXT.Provider>
    </>
  )
}

export default GLOBAL_CONTEXT