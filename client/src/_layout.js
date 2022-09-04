import React from 'react'

const Layout = ({children}) => {
  return (
    <>
    <div className="container font-poppins p-5">
        {children}
    </div>
    </>
  )
}

export default Layout