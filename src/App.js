import React from 'react';
import {Routes,Route} from "react-router-dom"
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/project' element={<Project/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>



    </div>
  )
}

export default App