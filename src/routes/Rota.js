//import { formToJSON } from "axios";
import React from "react";

import {BrowserRouter, Routes, Route}  from 'react-router-dom'

import Home from '../pages/Home';
import Cadastro from "../pages/Cadastro";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Cadastro" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>

    )
}

export default Router