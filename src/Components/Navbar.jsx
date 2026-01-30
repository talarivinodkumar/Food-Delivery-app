import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({
  cartCount,
  setShowCart,
  currentTheme,
  user,
  isAuthenticated,
  onAuthClick,
  onOrderHistoryClick,
  onLogout
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark sticky-top transition-all ${isScrolled ? 'shadow-lg' : ''}`}
      style={{
        backgroundColor: currentTheme.primary,
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#" style={{ letterSpacing: '1px' }}>
          🍽️ FoodExpress
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item mx-2">
              <a className="nav-link fw-bold" href="#menu" style={{ fontWeight: '800' }}>
                <strong>Menu</strong>
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link fw-bold" href="#offers" style={{ fontWeight: '800' }}>
                <strong>Offers</strong>
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link fw-bold" href="#about" style={{ fontWeight: '800' }}>
                <strong>About</strong>
              </a>
            </li>

            {/* Auth & Order buttons */}
            {isAuthenticated ? (
              <>
                <li className="nav-item mx-2">
                  <button
                    className="btn btn-sm btn-outline-light mx-1"
                    onClick={onOrderHistoryClick}
                    style={{ fontWeight: '600' }}
                  >
                    📋 Orders
                  </button>
                </li>
                <li className="nav-item mx-2">
                  <div className="dropdown">
                    <button
                      className="btn btn-sm btn-outline-light dropdown-toggle"
                      type="button"
                      id="userDropdown"
                      data-bs-toggle="dropdown"
                      style={{ fontWeight: '600' }}
                    >
                      👤 {user?.name || 'User'}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                      <li>
                        <a className="dropdown-item" href="#profile">
                          Profile
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <button className="dropdown-item" onClick={onLogout}>
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>
              </>
            ) : (
              <li className="nav-item mx-2">
                <button
                  className="btn btn-sm btn-outline-light"
                  onClick={onAuthClick}
                  style={{ fontWeight: '600' }}
                >
                  🔐 Login
                </button>
              </li>
            )}

            {/* Cart button */}
            <li className="nav-item mx-2">
              <button
                className="btn btn-light position-relative px-3 py-2 rounded-pill shadow-sm"
                onClick={() => setShowCart(true)}
                style={{
                  fontWeight: '600',
                  transition: 'transform 0.2s'
                }}
                onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
              >
                🛒 Cart
                {cartCount > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                    style={{
                      backgroundColor: currentTheme.danger,
                      fontSize: '0.7rem',
                      padding: '0.35em 0.65em'
                    }}
                  >
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