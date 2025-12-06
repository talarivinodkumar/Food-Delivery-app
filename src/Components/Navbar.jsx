import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



// Navbar Component
const Navbar = ({ cartCount, setShowCart }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          <span className="fs-3">🍴</span> FoodHub
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#menu">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <button className="btn btn-light position-relative" onClick={() => setShowCart(true)}>
                <i className="bi bi-cart3"></i> Cart
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                    {cartCount}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;