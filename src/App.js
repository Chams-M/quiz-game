import 'fontsource-roboto';
import './App.css';
import React from 'react'
import Hero from './routes/components/Presentational/Hero/Hero';
import SideBar from './routes/components/Presentational/SideBar/SideBar';
import Profile from './routes/components/Presentational/Profile/Profile';
import Navbar from './routes/components/Presentational/NavBar/Navbar';

const App = () => {
  return (
    <div className='App'>
      <SideBar/>
      <div className='content'>
      <Navbar/>
      <div className='appglass'>
        <Profile/>
      </div>
      </div>
      
    </div>
  )
}

export default App


