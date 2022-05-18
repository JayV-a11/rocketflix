import React from 'react';
import {
    Routes,
    Route,
    BrowserRouter
} from 'react-router-dom'

//pages
import Home from './pages/Home';

export default function routes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}