import { Button } from '@mui/material'
import React from 'react'
import user from '../../../../assets/images/profile_img.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='btn'> SearchBar </div>
        <div className='btn'> Start Quiz </div>
        <div> 
        <img src={user} className="user-img"/>
        <span>Chams M</span>
        </div>
      
    </div>
  )
}

export default Navbar
