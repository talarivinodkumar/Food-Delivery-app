import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-dark pt-5 pb-4 mt-5 border-top">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          
          {/* About Section */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-primary">FoodHub</h5>
            <p>Delicious meals delivered fast & fresh. Enjoy your favorite food from local restaurants anytime, anywhere.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Quick Links</h5>
            <p><a href="/" className="text-dark text-decoration-none">Home</a></p>
            <p><a href="/menu" className="text-dark text-decoration-none">Menu</a></p>
            <p><a href="/about" className="text-dark text-decoration-none">About Us</a></p>
            <p><a href="/contact" className="text-dark text-decoration-none">Contact</a></p>
          </div>

          {/* Services */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Services</h5>
            <p><a href="/order" className="text-dark text-decoration-none">Order Online</a></p>
            <p><a href="/track" className="text-dark text-decoration-none">Track Order</a></p>
            <p><a href="/faq" className="text-dark text-decoration-none">FAQ</a></p>
            <p><a href="/offers" className="text-dark text-decoration-none">Offers</a></p>
          </div>

          {/* Social Media */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Follow Us</h5>
            <a href="https://github.com/talarivinodkumar/desktop-tutorial" className="text-dark me-3">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="text-dark me-3">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="text-dark me-3">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" className="text-dark me-3">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>

        </div>

        <hr className="mb-4" />

        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p>© 2024 FoodHub. All Rights Reserved.</p>
          </div>
          <div className="col-md-5 col-lg-4">
            <a href="/download-app" className="btn btn-primary btn-sm">Download App</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
