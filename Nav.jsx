import React from 'react'
import './Nav.css'
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
import { useState } from 'react';
const Nav = () => {
  const[activeNav, setActiveNav]=useState("#")
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#') } className={activeNav ===' #' ? 'active':''}><IoHome /></a>
      <a href="#about" onClick={()=>setActiveNav('#about') } className={activeNav==='#about' ? 'active':'' }><FaUser /></a>
      <a href="#service" onClick={()=>setActiveNav('#service') } className={activeNav==='#service' ? 'active':''}><MdHomeWork /></a>
      <a href="#product" onClick={()=>setActiveNav('#product') } className={activeNav==='#product' ? 'active':''}><MdDesignServices /></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact') } className={activeNav==='#contact' ? 'active':''}><MdContactPhone /></a>
    </nav>
  )
}

export default Nav
