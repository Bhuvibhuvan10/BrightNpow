import React from 'react'
import './Contact.css'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <section >
    <div class="footer-distributed">
      <div class="footer-left">
        <div class="container-fluid ">
          <h1 class="text-center my-5">Contact Us</h1>
          <div class="row">
            <div class="col-lg-4 col-md-4 col-12">
             <h3 id="h3">Bright<span>'N Power</span></h3>
             <p>customercare@Bright'Npower.com</p>
             <p><FaLocationDot/>  46/ Newcolony 4th cross street/New colony 2nd main road, New colony, Alwarthirunagar , Chennai, India, 600087</p>
             <p><FaPhoneAlt />+91 94441 11093</p>
             
            </div>
            
              <div class="col-lg-4 col-md-4 col-12">
                <div class="get">
                  
                    <h4><span>Get</span> in touch</h4>
                    <button ><i class="fa fa-twitter" aria-hidden="true"></i></button>
                    <button ><i class="fa fa-facebook-official" aria-hidden="true"></i></button>
                  <button ><i class="fa fa-instagram" aria-hidden="true"></i></button>
                    <h4>Work with us</h4>
                    <p >jerald@brightnpower.com</p>
                
          </div>
        </div>
              <div class="col-lg-4 col-md-4 col-12">
                <div class="social-media">
                <a href="http://facebook.com" target="_blank"> <FaFacebook /></a>
                <a href="http://linkedin.com" target="_blank"><FaLinkedin /></a>
                <a href="http://twitter.com" target="_blank"><TiSocialTwitter /></a>
                <a href="http://instagram.com" target="_blank"><FaInstagram /></a>
                  
                
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    

    
      </section>
  )
}

export default Contact
