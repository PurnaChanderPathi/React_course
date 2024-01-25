import React from 'react'

const NavBar = () => {
  return (
    <div className='d-flex justify-content-end'>
     <h5 style={{marginRight:'5px' }}><a href='/home'> Home</a></h5>
     <h5 style={{marginRight:'5px'}}><a href='/dashboard'>Dashboard</a></h5>
     <h5><a href='/about'>About</a></h5>
    </div>
  )
}
export default NavBar