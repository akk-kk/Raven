import './App.css';
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './component/home/Home'
import Login from './component/login/Login';
import Navbar from './component/navbar/Navbar';
import { useEffect } from 'react';

function App() {
  const [loginState, setLoginState] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (loginState) {
      navigate('/')
    } else {
      navigate('/login')
    }
  }, [loginState])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        {
          loginState ? (
            <>
              <Route path='/' element={<Home />} />
            </>
          ) : (
            <Route path='/login' element={<Login />} />
          )
        }
      </Routes>
    </div>
  );
}

export default App;
