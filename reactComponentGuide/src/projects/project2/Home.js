import React, { useState } from 'react'
import { Link, unstable_HistoryRouter } from 'react-router-dom';


function Home() {
  let history =unstable_HistoryRouter();
  return (
    <div>
        <h2>Welcome to Home</h2>
          <button onClick={() => {
        
          }}>Login</button>
    </div>
  )
}

export default Home