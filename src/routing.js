import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import React from 'react'
import { Login } from './admin/login'
import { Dashbord } from './admin/dashbord'
import { Agent } from './admin/agent'

export const Routing = () =>{
    

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path='/dasboard' element={< Dashbord />} />
                <Route path='/agent' element={< Agent/>} />
            </Routes>
        </BrowserRouter>
    )
}
