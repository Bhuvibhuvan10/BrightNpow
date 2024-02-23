import React from 'react'
import './About.css'
import Aboutpic from '../assets/11.jpg'
import { IoMdContacts } from "react-icons/io";  
import { TiTick } from "react-icons/ti";  
import { FaAward } from "react-icons/fa6";      
import { GrUserSettings } from "react-icons/gr";              
const About = () => {
  return (
    
    <>
    <section  id="about" className="about-container">
    <div classname="head">
    <h3 className='text-center get'>Get To Know</h3>
    </div>
      <div className='about-badge'>
      <div class="row">
    <div class="col">
      <h3><IoMdContacts /> 3243</h3>
      <h5>Happy Customer</h5>
      <h5>We have 4753 customers that are completely satisfied with our solar panels.</h5>
    </div>
    <div class="col">
    <h3><TiTick /> 4234</h3>
      <h5>Project Done</h5>
      <h5>Based on our prior work, we completed 4534 projects without recieving any complaints or delays.</h5>
    </div>
    <div class="col">
      <h3><FaAward /> 3123</h3>
      <h5>Awards Win 15</h5>
      <h5>With the Best Solar Manufacturing Award, we have been honored.</h5>
    </div>
    <div class="col">
    <h3><GrUserSettings /> 1831</h3>
      <h5>Expert Workers</h5>
      <h5>All services and installations are carried out by trained and skilled persons.</h5>
    </div>
      </div>

      </div>
       <div class="row about-detail">
    <div class="col picture">
      <img src={Aboutpic} alt="#" />
    </div>
    <div class="col about-content">
     
      <h3>About Us</h3>
      <h3>
         "Over 36Years of Experience in the Solar & Renewable Energy Sector"
         <h5>
          Since every customer's needs are unique and we are skilled at
          understanding them, we take a special approach to wealth creation and 
          offer personalized solutions. Our in-depth study of the legal and 
          business considerations of the solar and power sectors will guarantee 
          that the customers benefits from the collaborative effort. </h5>

      </h3>
    </div>
    </div>
    </section>
    </>
  )
}

export default About
