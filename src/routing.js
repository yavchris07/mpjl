import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import React from 'react'
import { Login } from './admin/login'
import { Dashbord } from './admin/dashbord'
import { Agent } from './admin/agent'
import Home from './pages/home'
import Single from './pages/single'

export const Routing = () =>{
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path='/dashboard' element={<Dashbord />} />
                <Route path='/agent' element={<Agent />} />
                <Route path='/home' element={<Home />} />
                <Route path='/blog/:id' element={<Single />} />
            </Routes>
        </BrowserRouter>
    )
}
