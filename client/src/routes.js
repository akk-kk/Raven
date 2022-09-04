import React from 'react'
import Layout from './_layout'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Landing from './pages';
import Room from './pages/room';
const ROUTES = () => {
    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Landing />} />
                        <Route path='/room' element={<Room />} />
                    </Routes>
                </Layout>
            </BrowserRouter>

        </>
    )
}

export default ROUTES