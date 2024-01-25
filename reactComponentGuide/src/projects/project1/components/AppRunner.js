import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Create from './Create';
import Read from './Read';
import Update from './Update';

function AppRunner() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Create />}/>
      <Route  path="/read" element={<Read />}/>
      <Route  path="/update" element={<Update />}/>
    </Routes>
    </BrowserRouter>

  )
}

export default AppRunner;