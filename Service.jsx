import React from 'react'
import './Service.css'
import pic11 from '../assets/solarhome.jpg'
import pic22 from '../assets/solarIndus.jpg'
import pic33 from '../assets/solarRenewable.jpg'
const Service = () => {
  const cardStyle={
    width:'18rem',
    display:'flex',
  }
  return (
   <section id="service" className='service_container'>
      <div>
        <h3 className='text-center'>Our Service</h3>
        <h2 className='text-center'>We convert sunlight into electricity</h2>
      </div>
     <div className='service_content'>
     <div class="card-group">

        <div class="card"style={cardStyle}>
          <img src={pic11} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Solar-Home</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card"style={cardStyle}>
          <img src={pic22} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Solar-Indus</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card"style={cardStyle}>
          <img src={pic33} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Solar-Renewable</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
          </div>
        </div>
      
    </section>
  )
}

export default Service
