import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_image from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="Logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Langugae</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={search_icon} alt="search_icon" className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt="" className='icons' />

      </div>

      <div className="navbar-profile">
        <img src={profile_image} alt="" className='profile' />
        <img src={caret_icon} alt="" />
        <div className="dropdown">
          <p>Sign Out of Netflix </p>
        </div>
      </div>

    </div>
  )
}

export default Navbar