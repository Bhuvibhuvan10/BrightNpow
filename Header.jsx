import React from 'react'
import './Header.css'

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import Logo from '../assets/logo.png'
const Header = () => {
  return (
    <div className="container-fluid header-container">

      <div className="header-location">
        <img src={Logo} alt="..." />
       
      
        <div className='header-socials'>

        <a href="http://facebook.com" target="_blank"> <FaFacebook /></a>
        <a href="http://linkedin.com" target="_blank"><FaLinkedin /></a>
        <a href="http://twitter.com" target="_blank"><TiSocialTwitter /></a>
        <a href="http://instagram.com" target="_blank"><FaInstagram /></a>
      
    </div>
     

   
      </div>
      
    </div>
  )
}

export default Header
