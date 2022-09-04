import React from 'react'
import {Layout} from './_layout'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Landing from './pages';
import Room from './pages/room';
import WaitingScreen from './pages/waiting';
const ROUTES = () => {
    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Landing />} />
                        <Route path='/meet' element={<Room/>} />
                        <Route path='/join-meet' element={<WaitingScreen/>} />
                    </Routes>
                </Layout>
            </BrowserRouter>

        </>
    )
}

export default ROUTES