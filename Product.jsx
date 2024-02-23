import React from 'react'
import './Product.css'
import pic111 from '../assets/inverter.jpg'
import pic222 from '../assets/solarpanel.jpg'
import pic333 from '../assets/turesel-1.png'
import pic444 from '../assets/tracker.jpg'
import pic555 from '../assets/transformer.jpg'
import pic666 from '../assets/transitor.jpg'
const Product = () => {
  return (
    <section id="product" className='product-container'>
      
      <div class="container">
    <h1 class="text-center my-5">OUR PRODUCTS</h1>
    <div class="row">
      <div class="col-lg-4 col-md-4 col-12">
        <div class="card ">
          <img src={pic111} class="card-img-top"/>
          <div class="card-body text-center">
            <h5 class="card-title">Inverter</h5>
            <a href="#" class="btn signin ">Add To Cart</a>
          </div>
       </div>
      </div>
      <div class="col-lg-4 col-md-4 col-12">
          <div class="card" >
            <img src={pic222} class="card-img-top"/>
            <div class="card-body text-center">
              <h5 class="card-title">Solar Panel with offer</h5>
              <a href="#" class="btn signin">Add To Cart</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-12">
          <div class="card ">
            <img src={pic333} class="card-img-top" />
            <div class="card-body text-center">
              <h5 class="card-title">Tursel</h5>
              <a href="#" class="btn signin">Add To Cart</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-12">
          <div class="card">
            <img src={pic444} class="card-img-top"/>
            <div class="card-body text-center">
              <h5 class="card-title">Kali Mi</h5>
              <a href="#" class="btn signin">Add To Cart</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-12">
          <div class="card">
            <img src={pic555}class="card-img-top" alt="..."/>
            <div class="card-body text-center">
              <h5 class="card-title">Laal-Mirch</h5>
              <a href="#" class="btn signin">Add To Cart</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-12">
          <div class="card">
            <img src={pic666} class="card-img-top" alt="..."/>
            <div class="card-body text-center">
              <h5 class="card-title">Tej Patta</h5>
              <a href="#" class="btn signin">Add To Cart</a>
            </div>
          </div> 
         </div>
       
          </div>
        </div>
     
    </section>
  )
}

export default Product
