import React from 'react';

function Footer({ currentTheme = { primary: 'rgb(209, 10, 43)', light: '#F7F9FB', white: '#FFFFFF', dark: '#8d9eedff' } }) {
  return (
    <footer className="pt-5 pb-4 mt-5" style={{ backgroundColor: '#1a1a2e', color: '#ffffff' }}>
      <div className="container">
        <div className="row">
          
          {/* About Section */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="mb-4 text-uppercase" style={{ fontWeight: '800', color: currentTheme.primary, letterSpacing: '1px', cursor: 'pointer', transition: 'all 0.3s ease', padding: '0.5rem', borderRadius: '5px' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.textShadow = `0 0 10px ${currentTheme.primary}`; e.currentTarget.style.backgroundColor = 'rgba(209, 10, 43, 0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.textShadow = 'none'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
              <strong>🍽️ FoodExpress</strong>
            </h5>
            <p style={{ lineHeight: '1.8', color: '#b0b0b0', fontSize: '0.95rem' }}>
              <strong>Delicious meals delivered fast & fresh.</strong> Enjoy your favorite food from local restaurants anytime, anywhere with premium quality service.
            </p>
            <p style={{ color: '#b0b0b0', fontSize: '0.85rem' }}>
              📍 Available in 50+ cities | ⏱️ 20-30 min delivery | ⭐ 4.8+ rating
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="mb-4 text-uppercase" style={{ fontWeight: '800', color: currentTheme.primary, letterSpacing: '1px', cursor: 'pointer', transition: 'all 0.3s ease', padding: '0.5rem', borderRadius: '5px' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.textShadow = `0 0 10px ${currentTheme.primary}`; e.currentTarget.style.backgroundColor = 'rgba(209, 10, 43, 0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.textShadow = 'none'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
              <strong>Quick Links</strong>
            </h5>
            <p><a href="/" className="text-decoration-none" style={{ color: '#b0b0b0' }}>🏠 Home</a></p>
            <p><a href="/menu" className="text-decoration-none" style={{ color: '#b0b0b0' }}>📋 Menu</a></p>
            <p><a href="/about" className="text-decoration-none" style={{ color: '#b0b0b0' }}>ℹ️ About Us</a></p>
            <p><a href="/contact" className="text-decoration-none" style={{ color: '#b0b0b0' }}>📞 Contact</a></p>
          </div>

          {/* Services */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="mb-4 text-uppercase" style={{ fontWeight: '800', color: currentTheme.primary, letterSpacing: '1px', cursor: 'pointer', transition: 'all 0.3s ease', padding: '0.5rem', borderRadius: '5px' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.textShadow = `0 0 10px ${currentTheme.primary}`; e.currentTarget.style.backgroundColor = 'rgba(209, 10, 43, 0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.textShadow = 'none'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
              <strong>Services</strong>
            </h5>
            <p><a href="/order" className="text-decoration-none" style={{ color: '#b0b0b0' }}>🛒 Order Online</a></p>
            <p><a href="/track" className="text-decoration-none" style={{ color: '#b0b0b0' }}>📦 Track Order</a></p>
            <p><a href="/faq" className="text-decoration-none" style={{ color: '#b0b0b0' }}>❓ FAQ</a></p>
            <p><a href="/offers" className="text-decoration-none" style={{ color: '#b0b0b0' }}>🎁 Special Offers</a></p>
          </div>

          {/* Social Media */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="mb-4 text-uppercase" style={{ fontWeight: '800', color: currentTheme.primary, letterSpacing: '1px', cursor: 'pointer', transition: 'all 0.3s ease', padding: '0.5rem', borderRadius: '5px' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.textShadow = `0 0 10px ${currentTheme.primary}`; e.currentTarget.style.backgroundColor = 'rgba(209, 10, 43, 0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.textShadow = 'none'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
              <strong>Follow Us</strong>
            </h5>
            <a href="https://github.com/talarivinodkumar/desktop-tutorial" className="me-3" style={{ color: currentTheme.primary, fontSize: '1.3rem', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="me-3" style={{ color: currentTheme.primary, fontSize: '1.3rem', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="me-3" style={{ color: currentTheme.primary, fontSize: '1.3rem', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" className="me-3" style={{ color: currentTheme.primary, fontSize: '1.3rem', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
              <i className="fab fa-linkedin"></i>
            </a>
          </div>

        </div>

        <hr style={{ borderColor: '#333', margin: '2rem 0' }} />

        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p style={{ color: '#b0b0b0', fontSize: '0.9rem' }}>
              <strong>© 2024 FoodExpress. All Rights Reserved.</strong>
            </p>
            <p style={{ color: '#888', fontSize: '0.8rem' }}>
              Privacy Policy | Terms of Service | Refund Policy
            </p>
          </div>
          <div className="col-md-5 col-lg-4 text-end">
            <button className="btn me-2" style={{ backgroundColor: currentTheme.primary, color: '#ffffff', fontWeight: '600', padding: '0.5rem 1.5rem', borderRadius: '25px' }}>
              📱 Download App
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #333' }}>
          <div className="row text-center text-md-start">
            <div className="col-md-4 mb-3">
              <p style={{ color: '#b0b0b0' }}><strong>📧 Email:</strong> support@foodexpress.com</p>
            </div>
            <div className="col-md-4 mb-3">
              <p style={{ color: '#b0b0b0' }}><strong>📞 Phone:</strong> 1-800-FOOD-EXPRESS</p>
            </div>
            <div className="col-md-4 mb-3">
              <p style={{ color: '#b0b0b0' }}><strong>⏰ Hours:</strong> Mon-Sun: 10 AM - 11 PM</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
