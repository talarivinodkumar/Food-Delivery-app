import React from 'react'

function Hero() {
  return (
     <div className="bg-danger text-white py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-3">Delicious Food Delivered to Your Door</h1>
            <p className="lead mb-4">Order from our wide selection of cuisines and enjoy fast delivery</p>
            <a href="#menu" className="btn btn-light btn-lg">Order Now</a>
          </div>
          <div className="col-lg-6 text-center">
            <div className="fs-1">🍕 🍔 🍣 🌮 🍝</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero