import React from 'react'
import NavBar from './NavBar'
import {BrowserRouter,Route,Routes,Outlet,Switch} from 'react-router-dom';
import Home from './Home';
import DashBoard from './DashBoard';
import About from './About';

function App() {
  return (
    <div>
        <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/about' element={<About />} />
        </Routes>       
        </BrowserRouter>   
    </div>
  )
}

export default App