import React from 'react'
import Layout from './_layout'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Landing from './pages';
const ROUTES = () => {
    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Landing />} />
                    </Routes>
                </Layout>
            </BrowserRouter>

        </>
    )
}

export default ROUTES