import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


// Color Theme Configuration
const theme = {
  primary: 'rgb(235, 96, 40)',      // Vibrant Orange
  secondary: '#379eed',    // Deep Blue
  accent: '#fffcf6ff',       // Golden Yellow
  success: '#06D6A0',      // Mint Green
  danger: '#d41047ff',       // Pink Red
  light: '#F7F9FB',
  dark: '#8d9eedff',
  white: '#FFFFFF'
};

// Navbar Component
const Navbar = ({ cartCount, setShowCart, currentTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
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
              <a className="nav-link fw-semibold" href="#menu">Menu</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link fw-semibold" href="#offers">Offers</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link fw-semibold" href="#about">About</a>
            </li>
            <li className="nav-item mx-2">
              <button 
                className="btn btn-light position-relative px-4 py-2 rounded-pill shadow-sm"
                onClick={() => setShowCart(true)}
                style={{ 
                  fontWeight: '600',
                  transition: 'transform 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
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

// Hero Component
const Hero = ({ currentTheme }) => {
  return (
    <div 
      className="py-5"
      style={{
        background: `linear-gradient(135deg, ${currentTheme.primary} 0%, ${currentTheme.secondary} 100%)`,
        color: currentTheme.white
      }}
    >
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center text-lg-start">
           
            <h1 className="display-3 fw-bold mb-3" style={{ lineHeight: '1.2' }}>
              Order Food <div className="mb-3">
              {/* <img src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?w=100&h=100&fit=crop" alt="Happy Food" style={{ width: '85px', height: '85px', objectFit: 'cover', borderRadius: '12px', display: 'inline-block' }} /> */}
            </div>
            </h1>
            <p className="lead mb-4">Delivered in 20 minutes</p>
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
              <a 
                href="#menu" 
                className="btn btn-lg px-4 py-3 rounded-pill shadow-lg fw-semibold"
                style={{ 
                  backgroundColor: currentTheme.accent,
                  color: currentTheme.dark,
                  border: 'none'
                }}
              >
                Explore Menu
              </a>
              <button 
                className="btn btn-lg btn-outline-light px-4 py-3 rounded-pill fw-semibold"
              >
                Download App
              </button>
            </div>
          </div>
          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <div className="row g-4">
              <div className="col-6 col-md-4">
                <img src="https://loremflickr.com/150/150/biryani?lock=hero1" alt="Biryani" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '50%', boxShadow: '0 8px 20px rgba(0,0,0,0.3)', border: '4px solid #fff' }} />
              </div>
              <div className="col-6 col-md-4">
                <img src="https://loremflickr.com/150/150/fish,fry?lock=hero2" alt="Fish Fry" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '50%', boxShadow: '0 8px 20px rgba(0,0,0,0.3)', border: '4px solid #fff' }} />
              </div>
              <div className="col-6 col-md-4">
                <img src="https://loremflickr.com/150/150/salad?lock=hero3" alt="Salad" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '50%', boxShadow: '0 8px 20px rgba(0,0,0,0.3)', border: '4px solid #fff' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Menu Item Card Component
const MenuItemCard = ({ item, addToCart, currentTheme }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="col">
      <div 
        className="card h-100 border-0 shadow-sm"
        style={{ 
          transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="position-relative">
          <div 
            className="d-flex align-items-center justify-content-center overflow-hidden"
            style={{ 
              height: '180px',
              background: `linear-gradient(135deg, ${currentTheme.light}, ${currentTheme.white})`,
              fontSize: '60px'
            }}
          >
            {item.image ? (
              <img 
                src={item.image} 
                alt={item.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            ) : null}
            {!item.image || item.image.includes('via.placeholder') ? (
              <div style={{ fontSize: '60px' }}>
                {item.category === 'Pizza' && '🍕'}
                {item.category === 'Burgers' && '🍔'}
                {item.category === 'Salads' && '🥗'}
                {item.category === 'Pasta' && '🍝'}
                {item.category === 'Appetizers' && '🍟'}
                {item.category === 'Japanese' && '🍣'}
                {item.category === 'Indian' && '🍛'}
                {item.category === 'Mexican' && '🌮'}
                {item.category === 'Desserts' && '🍰'}
                {item.category === 'Non-Veg' && '🥩'}
                {item.category === 'Beverages' && '🥤'}
              </div>
            ) : null}
          </div>
          {item.isPopular && (
            <span 
              className="position-absolute top-0 end-0 m-2 badge px-3 py-2"
              style={{ 
                backgroundColor: currentTheme.danger,
                fontSize: '0.75rem'
              }}
            >
              🔥 Popular
            </span>
          )}
        </div>
        <div className="card-body">
          <h5 className="card-title fw-bold mb-2">{item.name}</h5>
          <p className="card-text text-muted small mb-3">{item.description}</p>
          <div className="d-flex align-items-center mb-2">
            <span style={{ color: currentTheme.accent }}>⭐</span>
            <span className="ms-1 small fw-semibold">{item.rating}</span>
            <span className="ms-2 small text-muted">({item.reviews} reviews)</span>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <span className="h5 mb-0 fw-bold" style={{ color: currentTheme.primary }}>
              ${item.price.toFixed(2)}
            </span>
            <button 
              className="btn btn-sm px-3 py-2 rounded-pill fw-semibold"
              style={{ 
                backgroundColor: currentTheme.primary,
                color: currentTheme.white,
                border: 'none'
              }}
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Menu Section Component
const MenuSection = ({ items, addToCart, selectedCategory, setSelectedCategory, currentTheme }) => {
  const categories = ['All', ...new Set(items.map(item => item.category))];
  const filteredItems = selectedCategory === 'All' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  return (
    <section id="menu" className="py-5" style={{ backgroundColor: currentTheme.light }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3" style={{ color: currentTheme.dark }}>
            Our Delicious Menu
          </h2>
          <p className="text-muted fs-5">Choose from our wide variety of cuisines</p>
        </div>
        
        {/* Category Filter */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          {categories.map(category => (
            <button
              key={category}
              className={`btn px-4 py-2 rounded-pill fw-semibold shadow-sm ${
                selectedCategory === category ? '' : 'btn-outline-primary'
              }`}
              style={{
                backgroundColor: selectedCategory === category ? currentTheme.primary : 'transparent',
                color: selectedCategory === category ? currentTheme.white : currentTheme.primary,
                borderColor: currentTheme.primary,
                transition: 'all 0.3s ease'
              }}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {filteredItems.map(item => (
            <MenuItemCard 
              key={item.id} 
              item={item} 
              addToCart={addToCart}
              currentTheme={currentTheme}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Cart Modal Component
const CartModal = ({ show, setShow, cart, removeFromCart, updateQuantity, currentTheme }) => {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 2.99;
  const tax = total * 0.08;
  const finalTotal = total + deliveryFee + tax;

  if (!show) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
      <div className="modal-dialog modal-dialog-scrollable modal-lg">
        <div className="modal-content border-0 shadow-lg">
          <div 
            className="modal-header border-0"
            style={{ backgroundColor: currentTheme.primary, color: currentTheme.white }}
          >
            <h5 className="modal-title fw-bold fs-4">🛒 Your Cart</h5>
            <button 
              type="button" 
              className="btn-close btn-close-white" 
              onClick={() => setShow(false)}
            ></button>
          </div>
          <div className="modal-body p-4">
            {cart.length === 0 ? (
              <div className="text-center py-5">
                <div className="fs-1 mb-3">🛒</div>
                <p className="text-muted fs-5">Your cart is empty</p>
                <button 
                  className="btn btn-primary mt-3 px-4 py-2 rounded-pill"
                  onClick={() => setShow(false)}
                  style={{ backgroundColor: currentTheme.primary }}
                >
                  Start Ordering
                </button>
              </div>
            ) : (
              <div>
                {cart.map(item => (
                  <div key={item.id} className="d-flex align-items-center mb-4 pb-4 border-bottom">
                    <div className="fs-2 me-3">{item.image}</div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1 fw-bold">{item.name}</h6>
                      <small className="text-muted">${item.price.toFixed(2)} each</small>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <div className="btn-group" role="group">
                        <button 
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          −
                        </button>
                        <button className="btn btn-outline-secondary btn-sm" disabled>
                          {item.quantity}
                        </button>
                        <button 
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <span className="fw-bold" style={{ color: currentTheme.primary, minWidth: '60px' }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <button 
                        className="btn btn-sm"
                        style={{ color: currentTheme.danger }}
                        onClick={() => removeFromCart(item.id)}
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
                
                {/* Bill Summary */}
                <div className="mt-4 p-3 rounded" style={{ backgroundColor: currentTheme.light }}>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Delivery Fee</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <strong className="fs-5">Total</strong>
                    <strong className="fs-5" style={{ color: currentTheme.primary }}>
                      ${finalTotal.toFixed(2)}
                    </strong>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="modal-footer border-0 p-4">
            <button 
              className="btn w-100 py-3 rounded-pill fw-bold shadow"
              disabled={cart.length === 0}
              style={{ 
                backgroundColor: currentTheme.success,
                color: currentTheme.white,
                border: 'none'
              }}
            >
              Proceed to Checkout →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Footer Component
const Footer = ({ currentTheme }) => {
  return (
    <footer className="py-5" style={{ backgroundColor: currentTheme.dark, color: currentTheme.light }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">🍽️ FoodExpress</h5>
            <p className="text-muted">Delivering happiness to your doorstep since 2025</p>
          </div>
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Restaurants</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold mb-3">Follow Us</h6>
            <div className="d-flex gap-3">
              <span style={{ fontSize: '1.5rem', cursor: 'pointer' }}>📘</span>
              <span style={{ fontSize: '1.5rem', cursor: 'pointer' }}>📷</span>
              <span style={{ fontSize: '1.5rem', cursor: 'pointer' }}>🐦</span>
            </div>
          </div>
        </div>
        <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
        <div className="text-center text-muted">
          <p className="mb-0">© 2025 FoodExpress. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Complete Real-world Menu Data with All Categories
const realMenuItems = [
  // PIZZA VARIETIES
  { id: 1, name: 'Margherita Pizza', category: 'Pizza', price: 120.99, image: 'https://loremflickr.com/400/400/pizza,margherita?lock=1', description: 'Fresh mozzarella, tomato sauce, basil', rating: 4.8, reviews: 320, isPopular: true },
  { id: 2, name: 'Pepperoni Pizza', category: 'Pizza', price: 140.99, image: 'https://loremflickr.com/400/400/pizza,pepperoni?lock=2', description: 'Classic pepperoni with extra cheese', rating: 4.9, reviews: 450, isPopular: true },
  { id: 3, name: 'Veggie Supreme Pizza', category: 'Pizza', price: 130.99, image: 'https://loremflickr.com/400/400/pizza,vegetables?lock=3', description: 'Bell peppers, olives, mushrooms, onions', rating: 4.6, reviews: 280 },
  { id: 4, name: 'BBQ Chicken Pizza', category: 'Pizza', price: 150.99, image: 'https://loremflickr.com/400/400/pizza,bbq,chicken?lock=4', description: 'BBQ sauce, grilled chicken, red onions', rating: 4.7, reviews: 310 },
  { id: 5, name: 'Hawaiian Pizza', category: 'Pizza', price: 130.99, image: 'https://loremflickr.com/400/400/pizza,hawaiian?lock=5', description: 'Ham, pineapple, mozzarella', rating: 4.5, reviews: 240 },
  { id: 6, name: 'Meat Lovers Pizza', category: 'Pizza', price: 160.99, image: 'https://loremflickr.com/400/400/pizza,meat?lock=6', description: 'Pepperoni, sausage, bacon, ham', rating: 4.8, reviews: 380 },
   
  // BURGERS
  { id: 7, name: 'Classic Beef Burger', category: 'Burgers', price: 90.99, image: 'https://loremflickr.com/400/400/burger,beef?lock=7', description: 'Angus beef, lettuce, tomato, pickles', rating: 4.6, reviews: 290 },
  { id: 8, name: 'Double Cheese Burger', category: 'Burgers', price: 110.99, image: 'https://loremflickr.com/400/400/burger,cheese?lock=8', description: 'Two beef patties, double cheddar cheese', rating: 4.7, reviews: 350 },
  { id: 9, name: 'Chicken Burger', category: 'Burgers', price: 100.99, image: 'https://loremflickr.com/400/400/burger,chicken?lock=9', description: 'Crispy chicken, mayo, lettuce', rating: 4.5, reviews: 270 },
  { id: 10, name: 'Veggie Burger', category: 'Burgers', price: 90.99, image: 'https://loremflickr.com/400/400/burger,veggie?lock=10', description: 'Plant-based patty, avocado, sprouts', rating: 4.4, reviews: 200 },
  { id: 11, name: 'Bacon BBQ Burger', category: 'Burgers', price: 120.99, image: 'https://loremflickr.com/400/400/burger,bacon?lock=11', description: 'Beef patty, crispy bacon, BBQ sauce', rating: 4.8, reviews: 320, isPopular: true },

  // SALADS
  { id: 12, name: 'Caesar Salad', category: 'Salads', price: 80.99, image: 'https://loremflickr.com/400/400/salad,caesar?lock=12', description: 'Romaine, parmesan, croutons, caesar dressing', rating: 4.5, reviews: 180 },
  { id: 13, name: 'Greek Salad', category: 'Salads', price: 90.99, image: 'https://loremflickr.com/400/400/salad,greek?lock=13', description: 'Feta cheese, olives, cucumber, tomatoes', rating: 4.6, reviews: 200 },
  { id: 14, name: 'Garden Fresh Salad', category: 'Salads', price: 120.99, image: 'https://loremflickr.com/400/400/salad,fresh?lock=14', description: 'Mixed greens, cherry tomatoes, carrots', rating: 4.4, reviews: 150 },
  { id: 15, name: 'Chicken Caesar Salad', category: 'Salads', price: 110.99, image: 'https://loremflickr.com/400/400/salad,chicken?lock=15', description: 'Grilled chicken, romaine, parmesan', rating: 4.7, reviews: 220 },

  // PASTA
  { id: 16, name: 'Spaghetti Carbonara', category: 'Pasta', price: 100.99, image: 'https://loremflickr.com/400/400/pasta,carbonara?lock=16', description: 'Creamy pasta with bacon and parmesan', rating: 4.8, reviews: 290, isPopular: true },
  { id: 17, name: 'Penne Arrabbiata', category: 'Pasta', price: 130.99, image: 'https://loremflickr.com/400/400/pasta,arrabbiata?lock=17', description: 'Spicy tomato sauce with garlic', rating: 4.7, reviews: 250 },
  { id: 18, name: 'Fettuccine Alfredo', category: 'Pasta', price: 120.99, image: 'https://loremflickr.com/400/400/pasta,alfredo?lock=18', description: 'Creamy alfredo sauce, parmesan', rating: 4.6, reviews: 270 },
  { id: 19, name: 'Lasagna Bolognese', category: 'Pasta', price: 120.99, image: 'https://loremflickr.com/400/400/pasta,lasagna?lock=19', description: 'Layered pasta, meat sauce, cheese', rating: 4.8, reviews: 310 },
  { id: 20, name: 'Pasta Primavera', category: 'Pasta', price: 130.99, image: 'https://loremflickr.com/400/400/pasta,vegetables?lock=20', description: 'Seasonal vegetables, olive oil, garlic', rating: 4.5, reviews: 190 },

  // APPETIZERS
  { id: 21, name: 'Buffalo Chicken Wings', category: 'Appetizers', price: 100.99, image: 'https://loremflickr.com/400/400/wings,buffalo?lock=21', description: '8 pcs spicy wings with blue cheese', rating: 4.9, reviews: 410, isPopular: true },
  { id: 22, name: 'Mozzarella Sticks', category: 'Appetizers', price: 70.99, image: 'https://loremflickr.com/400/400/mozzarella,sticks?lock=22', description: '6 pcs crispy fried with marinara', rating: 4.5, reviews: 190 },
  { id: 23, name: 'Onion Rings', category: 'Appetizers', price: 60.99, image: 'https://loremflickr.com/400/400/onion,rings?lock=23', description: 'Golden crispy onion rings', rating: 4.4, reviews: 170 },
  { id: 24, name: 'Spring Rolls', category: 'Appetizers', price: 70.99, image: 'https://loremflickr.com/400/400/spring,rolls?lock=24', description: '4 pcs veggie spring rolls, sweet chili sauce', rating: 4.6, reviews: 210 },
  

  // JAPANESE CUISINE
  { id: 26, name: 'Salmon Sushi', category: 'Japanese', price: 150.99, image: 'https://loremflickr.com/400/400/sushi,salmon?lock=26', description: 'Fresh salmon nigiri - 8 pieces', rating: 4.9, reviews: 340 },
  { id: 27, name: 'California Roll', category: 'Japanese', price: 120.99, image: 'https://loremflickr.com/400/400/sushi,california?lock=27', description: 'Crab, avocado, cucumber', rating: 4.7, reviews: 280 },
  { id: 28, name: 'Spicy Tuna Roll', category: 'Japanese', price: 140.99, image: 'https://loremflickr.com/400/400/sushi,tuna?lock=28', description: 'Spicy tuna, cucumber, sesame', rating: 4.8, reviews: 300 },
  { id: 29, name: 'Tonkotsu Ramen', category: 'Japanese', price: 160.99, image: 'https://loremflickr.com/400/400/ramen,tonkotsu?lock=29', description: 'Pork belly, egg, bamboo shoots, noodles', rating: 4.9, reviews: 380, isPopular: true },
  { id: 30, name: 'Chicken Teriyaki Bowl', category: 'Japanese', price: 130.99, image: 'https://loremflickr.com/400/400/teriyaki,bowl?lock=30', description: 'Grilled chicken, rice, teriyaki sauce', rating: 4.7, reviews: 270 },
  { id: 31, name: 'Vegetable Tempura', category: 'Japanese', price: 110.99, image: 'https://loremflickr.com/400/400/tempura,vegetables?lock=31', description: 'Assorted fried vegetables, tempura sauce', rating: 4.6, reviews: 230 },
  { id: 32, name: 'Chicken Biryani', category: 'Indian', price: 240.99, image: 'https://loremflickr.com/400/400/biryani,chicken?lock=32', description: 'Basmati rice, spiced chicken, herbs', rating: 4.9, reviews: 420, isPopular: true },
  { id: 33, name: 'Mutton Biryani', category: 'Indian', price: 320.99, image: 'https://loremflickr.com/400/400/biryani,mutton?lock=33', description: 'Tender mutton, aromatic basmati rice', rating: 4.8, reviews: 390, isPopular: true },
  { id: 34, name: 'Mutton Keema', category: 'Indian', price: 300.99, image: 'https://loremflickr.com/400/400/keema,mutton?lock=34', description: 'Minced mutton curry with spices', rating: 4.7, reviews: 310 },
  { id: 35, name: 'Butter Chicken', category: 'Indian', price: 220.99, image: 'https://loremflickr.com/400/400/butter,chicken?lock=35', description: 'Creamy tomato curry with tandoori chicken', rating: 4.8, reviews: 380 },
  { id: 36, name: 'Paneer Tikka Masala', category: 'Indian', price: 220.99, image: 'https://loremflickr.com/400/400/paneer,tikka?lock=36', description: 'Grilled cottage cheese in spicy gravy', rating: 4.6, reviews: 290 },
  { id: 37, name: 'Tandoori Chicken', category: 'Indian', price: 600.99, image: 'https://loremflickr.com/400/400/tandoori,chicken?lock=37', description: 'Clay oven roasted spiced chicken', rating: 4.7, reviews: 320 },
  { id: 38, name: 'Dal Makhani', category: 'Indian', price: 100.99, image: 'https://loremflickr.com/400/400/dal,makhani?lock=38', description: 'Creamy black lentils with butter', rating: 4.6, reviews: 260 },
  { id: 39, name: 'Lamb Rogan Josh', category: 'Indian', price: 170.99, image: 'https://loremflickr.com/400/400/lamb,curry?lock=39', description: 'Tender lamb in aromatic kashmiri curry', rating: 4.8, reviews: 340 },
  { id: 40, name: 'Chicken 65', category: 'Indian', price: 220.99, image: 'https://loremflickr.com/400/400/chicken,65?lock=40', description: 'Spicy fried chicken appetizer', rating: 4.7, reviews: 300 },

  // MEXICAN CUISINE
  { id: 41, name: 'Beef Tacos', category: 'Mexican', price: 110.99, image: 'https://loremflickr.com/400/400/tacos,beef?lock=41', description: 'Three soft tacos with seasoned beef', rating: 4.8, reviews: 310, isPopular: true },
  { id: 42, name: 'Chicken Burrito', category: 'Mexican', price: 220.99, image: 'https://loremflickr.com/400/400/burrito,chicken?lock=42', description: 'Grilled chicken, rice, beans, cheese', rating: 4.6, reviews: 260 },
  { id: 43, name: 'Beef Quesadilla', category: 'Mexican', price: 120.99, image: 'https://loremflickr.com/400/400/quesadilla,beef?lock=43', description: 'Grilled tortilla with beef and cheese', rating: 4.7, reviews: 280 },
  { id: 44, name: 'Nachos Supreme', category: 'Mexican', price: 100.99, image: 'https://loremflickr.com/400/400/nachos,cheese?lock=44', description: 'Loaded nachos, cheese, jalapeños, salsa', rating: 4.6, reviews: 240 },
  { id: 45, name: 'Chicken Enchiladas', category: 'Mexican', price: 200.99, image: 'https://loremflickr.com/400/400/enchiladas,chicken?lock=45', description: 'Rolled tortillas with chicken, sauce', rating: 4.7, reviews: 290 },
  { id: 46, name: 'Guacamole & Chips', category: 'Mexican', price: 180.99, image: 'https://loremflickr.com/400/400/guacamole,chips?lock=46', description: 'Fresh avocado dip with tortilla chips', rating: 4.5, reviews: 200 },

  // DESSERTS
  { id: 47, name: 'Chocolate Lava Cake', category: 'Desserts', price: 60.99, image: 'https://loremflickr.com/400/400/cake,chocolate?lock=47', description: 'Molten chocolate center, vanilla ice cream', rating: 4.8, reviews: 220, isPopular: true },
  { id: 48, name: 'New York Cheesecake', category: 'Desserts', price: 70.99, image: 'https://loremflickr.com/400/400/cheesecake,newyork?lock=48', description: 'Classic creamy cheesecake, berry sauce', rating: 4.7, reviews: 200 },
  { id: 49, name: 'Tiramisu', category: 'Desserts', price: 100.99, image: 'https://loremflickr.com/400/400/tiramisu,dessert?lock=49', description: 'Classic Italian coffee dessert', rating: 4.9, reviews: 240 },
  { id: 50, name: 'Ice Cream Sundae', category: 'Desserts', price: 80.99, image: 'https://loremflickr.com/400/400/icecream,sundae?lock=50', description: 'Three scoops with toppings', rating: 4.7, reviews: 190 },
  { id: 51, name: 'Apple Pie', category: 'Desserts', price: 60.99, image: 'https://loremflickr.com/400/400/pie,apple?lock=51', description: 'Warm apple pie with cinnamon', rating: 4.6, reviews: 180 },
  { id: 52, name: 'Churros', category: 'Desserts', price: 60.99, image: 'https://loremflickr.com/400/400/churros,dessert?lock=52', description: 'Fried dough pastry with chocolate sauce', rating: 4.7, reviews: 210 },
  { id: 53, name: 'Gulab Jamun', category: 'Desserts', price: 50.99, image: 'https://loremflickr.com/400/400/gulab,jamun?lock=53', description: 'Indian milk dumplings in sweet syrup', rating: 4.8, reviews: 230 },
  { id: 54, name: 'Brownie Fudge', category: 'Desserts', price: 60.99, image: 'https://loremflickr.com/400/400/brownie,fudge?lock=54', description: 'Rich chocolate brownie with ice cream', rating: 4.8, reviews: 250 },

  // NON-VEG SPECIALS
  { id: 55, name: 'Grilled Salmon', category: 'Non-Veg', price: 220.99, image: 'https://loremflickr.com/400/400/salmon,fish?lock=55', description: 'Atlantic salmon, lemon butter sauce', rating: 4.9, reviews: 310 },
  { id: 56, name: 'Ribeye Steak', category: 'Non-Veg', price: 240.99, image: 'https://loremflickr.com/400/400/steak,ribeye?lock=56', description: '12oz premium ribeye, mashed potatoes', rating: 4.9, reviews: 380, isPopular: true },
  { id: 57, name: 'BBQ Ribs', category: 'Non-Veg', price: 190.99, image: 'https://loremflickr.com/400/400/ribs,bbq?lock=57', description: 'Slow-cooked pork ribs, BBQ sauce', rating: 4.8, reviews: 340 },
  { id: 58, name: 'Fish and Chips', category: 'Non-Veg', price: 140.99, image: 'https://loremflickr.com/400/400/fish,chips?lock=58', description: 'Battered cod, french fries, tartar sauce', rating: 4.7, reviews: 290 },
  { id: 59, name: 'Prawn Curry', category: 'Non-Veg', price: 200.99, image: 'https://loremflickr.com/400/400/prawn,curry?lock=59', description: 'Jumbo prawns in coconut curry', rating: 4.8, reviews: 320 },
  { id: 60, name: 'Lamb Chops', category: 'Non-Veg', price: 210.99, image: 'https://loremflickr.com/400/400/lamb,chops?lock=60', description: 'Grilled lamb chops with herbs', rating: 4.9, reviews: 350, isPopular: true },

  // ADDITIONAL PIZZA VARIETIES
  { id: 61, name: 'Four Cheese Pizza', category: 'Pizza', price: 150.99, image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=400&fit=crop', description: 'Mozzarella, cheddar, feta, parmesan', rating: 4.8, reviews: 300 },
  { id: 62, name: 'Truffle Oil Pizza', category: 'Pizza', price: 180.99, image: 'https://images.unsplash.com/photo-1628840042765-356cda07f4ee?w=400&h=400&fit=crop', description: 'White sauce, mushrooms, truffle oil', rating: 4.9, reviews: 280 },
  { id: 63, name: 'Seafood Pizza', category: 'Pizza', price: 160.99, image: 'https://images.unsplash.com/photo-1511689915662-48d19201a921?w=400&h=400&fit=crop', description: 'Shrimp, squid, mussels, garlic', rating: 4.7, reviews: 260 },
  { id: 64, name: 'Mushroom Pizza', category: 'Pizza', price: 130.99, image: 'https://images.unsplash.com/photo-1614049162883-2a378a49b805?w=400&h=400&fit=crop', description: 'Mixed mushrooms, garlic, herbs', rating: 4.6, reviews: 220 },
  { id: 65, name: 'White Pizza', category: 'Pizza', price: 140.99, image: 'https://images.unsplash.com/photo-1571407-918286b4a5a0?w=400&h=400&fit=crop', description: 'Ricotta, mozzarella, spinach, garlic', rating: 4.7, reviews: 240 },
  { id: 66, name: 'Spicy Chilli Pizza', category: 'Pizza', price: 150.99, image: 'https://images.unsplash.com/photo-1585238341710-4b4e6a7dd188?w=400&h=400&fit=crop', description: 'Jalapeno, chilli, onions, cheese', rating: 4.6, reviews: 210 },
  { id: 67, name: 'Delight Pizza', category: 'Pizza', price: 160.99, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop', description: 'Mixed meat and veggies', rating: 4.7, reviews: 250 },
  { id: 68, name: 'Paneer Tikka Pizza', category: 'Pizza', price: 140.99, image: 'https://images.unsplash.com/photo-1550547990-3b98b8a9b5d0?w=400&h=400&fit=crop', description: 'Tandoori paneer, onions, bell peppers', rating: 4.6, reviews: 190 },
  { id: 69, name: 'Corn and Cheese Pizza', category: 'Pizza', price: 120.99, image: 'https://images.unsplash.com/photo-1562547256-fa0eaf710133?w=400&h=400&fit=crop', description: 'Sweet corn, cheddar cheese, herbs', rating: 4.5, reviews: 170 },
  { id: 70, name: 'Thin Crust Veggie', category: 'Pizza', price: 130.99, image: 'https://images.unsplash.com/photo-1585238341264-8bc5bbb2b9d9?w=400&h=400&fit=crop', description: 'Thin crust with seasonal vegetables', rating: 4.6, reviews: 200 },

  // ADDITIONAL BURGERS
  { id: 71, name: 'Spicy Jalapeño Burger', category: 'Burgers', price: 115.99, image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=400&fit=crop', description: 'Beef patty, jalapeños, pepper jack cheese', rating: 4.7, reviews: 280 },
  { id: 72, name: 'Mushroom Swiss Burger', category: 'Burgers', price: 120.99, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop', description: 'Sautéed mushrooms, swiss cheese', rating: 4.6, reviews: 260 },
  { id: 73, name: 'Fish Burger', category: 'Burgers', price: 105.99, image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop', description: 'Crispy fish patty, tartar sauce, lettuce', rating: 4.5, reviews: 180 },
  { id: 74, name: 'Turkey Burger', category: 'Burgers', price: 110.99, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop', description: 'Lean turkey meat, spinach, cranberry', rating: 4.6, reviews: 200 },
  { id: 75, name: 'Pulled Pork Burger', category: 'Burgers', price: 125.99, image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=400&fit=crop', description: 'Slow-cooked pork, coleslaw, BBQ sauce', rating: 4.8, reviews: 300, isPopular: true },
  { id: 76, name: 'Mozzarella Burger', category: 'Burgers', price: 120.99, image: 'https://images.unsplash.com/photo-1612874742237-6526221fcf4c?w=400&h=400&fit=crop', description: 'Beef patty, mozzarella, tomato sauce', rating: 4.7, reviews: 240 },
  { id: 77, name: 'Crispy Chicken Burger', category: 'Burgers', price: 115.99, image: 'https://images.unsplash.com/photo-1621996346565-cd4628902c4a?w=400&h=400&fit=crop', description: 'Fried chicken, honey mustard, pickles', rating: 4.6, reviews: 220 },
  { id: 78, name: 'Black Bean Burger', category: 'Burgers', price: 95.99, image: 'https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=400&fit=crop', description: 'Plant-based black bean patty', rating: 4.5, reviews: 160 },
  { id: 79, name: 'Egg Burger', category: 'Burgers', price: 105.99, image: 'https://images.unsplash.com/photo-1608050108190-fe39db289053?w=400&h=400&fit=crop', description: 'Beef patty, fried egg, bacon, cheese', rating: 4.7, reviews: 270 },
  { id: 80, name: 'Triple Decker Burger', category: 'Burgers', price: 150.99, image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=400&fit=crop', description: 'Three beef patties, triple cheese', rating: 4.8, reviews: 320 },

  // ADDITIONAL SALADS
  { id: 81, name: 'Caprese Salad', category: 'Salads', price: 100.99, image: 'https://images.unsplash.com/photo-1559329007-40790c9fdf4a?w=400&h=400&fit=crop', description: 'Tomato, mozzarella, basil, olive oil', rating: 4.7, reviews: 210 },
  { id: 82, name: 'Nicoise Salad', category: 'Salads', price: 120.99, image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd93548?w=400&h=400&fit=crop', description: 'Tuna, egg, potatoes, green beans', rating: 4.6, reviews: 190 },
  { id: 83, name: 'Spinach Salad', category: 'Salads', price: 95.99, image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=400&fit=crop', description: 'Fresh spinach, bacon, mushrooms, dressing', rating: 4.5, reviews: 170 },
  { id: 84, name: 'Beet Salad', category: 'Salads', price: 105.99, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop', description: 'Roasted beets, goat cheese, walnuts', rating: 4.6, reviews: 180 },
  { id: 85, name: 'Quinoa Bowl', category: 'Salads', price: 130.99, image: 'https://images.unsplash.com/photo-1571115764595-644a12c7cb75?w=400&h=400&fit=crop', description: 'Quinoa, roasted veggies, tahini dressing', rating: 4.7, reviews: 220 },
  { id: 86, name: 'Asian Noodle Salad', category: 'Salads', price: 115.99, image: 'https://images.unsplash.com/photo-1563805042-7684c019e157?w=400&h=400&fit=crop', description: 'Rice noodles, veggies, sesame dressing', rating: 4.6, reviews: 200 },
  { id: 87, name: 'Coleslaw', category: 'Salads', price: 70.99, image: 'https://images.unsplash.com/photo-1568571933382-74d440642117?w=400&h=400&fit=crop', description: 'Shredded cabbage, creamy dressing', rating: 4.4, reviews: 150 },
  { id: 88, name: 'Feta Olive Salad', category: 'Salads', price: 110.99, image: 'https://images.unsplash.com/photo-1595521624669-56046af31670?w=400&h=400&fit=crop', description: 'Feta cheese, olives, tomatoes, cucumbers', rating: 4.6, reviews: 190 },
  { id: 89, name: 'Shrimp Salad', category: 'Salads', price: 140.99, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop', description: 'Grilled shrimp, mixed greens, lemon dressing', rating: 4.8, reviews: 280 },
  { id: 90, name: 'Avocado Salad', category: 'Salads', price: 120.99, image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=400&fit=crop', description: 'Fresh avocado, cherry tomatoes, citrus dressing', rating: 4.7, reviews: 240 },

  // ADDITIONAL PASTA
  { id: 91, name: 'Aglio e Olio', category: 'Pasta', price: 100.99, image: 'https://images.unsplash.com/photo-1623521906273-d2302f4d48aa?w=400&h=400&fit=crop', description: 'Spaghetti, garlic, olive oil, red pepper', rating: 4.6, reviews: 190 },
  { id: 92, name: 'Bolognese', category: 'Pasta', price: 120.99, image: 'https://images.unsplash.com/photo-1618445479027-ac85ddd0c6bd?w=400&h=400&fit=crop', description: 'Spaghetti with meat sauce', rating: 4.7, reviews: 230 },
  { id: 93, name: 'Seafood Pasta', category: 'Pasta', price: 180.99, image: 'https://images.unsplash.com/photo-1631867141221-9d5fc23b17f5?w=400&h=400&fit=crop', description: 'Shrimp, mussels, clams, garlic sauce', rating: 4.8, reviews: 290, isPopular: true },
  { id: 94, name: 'Pesto Pasta', category: 'Pasta', price: 130.99, image: 'https://images.unsplash.com/photo-1641194710667-2aea0b2e03d2?w=400&h=400&fit=crop', description: 'Basil pesto, pine nuts, parmesan', rating: 4.7, reviews: 250 },
  { id: 95, name: 'Creamy Mushroom Pasta', category: 'Pasta', price: 140.99, image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=400&fit=crop', description: 'Assorted mushrooms in cream sauce', rating: 4.6, reviews: 210 },
  { id: 96, name: 'Ravioli Stuffed', category: 'Pasta', price: 150.99, image: 'https://images.unsplash.com/photo-1628840042765-356cda07f4ee?w=400&h=400&fit=crop', description: 'Cheese or spinach filled ravioli', rating: 4.7, reviews: 270 },
  { id: 97, name: 'Gnocchi', category: 'Pasta', price: 130.99, image: 'https://images.unsplash.com/photo-1511689915662-48d19201a921?w=400&h=400&fit=crop', description: 'Potato gnocchi, butter, sage sauce', rating: 4.6, reviews: 200 },
  { id: 98, name: 'Linguine Clams', category: 'Pasta', price: 160.99, image: 'https://images.unsplash.com/photo-1614049162883-2a378a49b805?w=400&h=400&fit=crop', description: 'Linguine with fresh clams, white wine', rating: 4.8, reviews: 310 },
  { id: 99, name: 'Vegetable Pasta', category: 'Pasta', price: 110.99, image: 'https://images.unsplash.com/photo-1571407-918286b4a5a0?w=400&h=400&fit=crop', description: 'Mixed seasonal vegetables, olive oil', rating: 4.5, reviews: 160 },
  { id: 100, name: 'Spicy Arrabbiata', category: 'Pasta', price: 115.99, image: 'https://images.unsplash.com/photo-1585238341710-4b4e6a7dd188?w=400&h=400&fit=crop', description: 'Extra spicy tomato sauce, garlic', rating: 4.6, reviews: 210 },

  // ADDITIONAL APPETIZERS
  { id: 101, name: 'Calamari Rings', category: 'Appetizers', price: 110.99, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop', description: 'Fried squid rings, marinara sauce', rating: 4.7, reviews: 250 },
  { id: 102, name: 'Shrimp Tempura', category: 'Appetizers', price: 120.99, image: 'https://images.unsplash.com/photo-1550547990-3b98b8a9b5d0?w=400&h=400&fit=crop', description: 'Battered shrimp, sweet chili sauce', rating: 4.8, reviews: 280 },
  { id: 103, name: 'Chicken Tenders', category: 'Appetizers', price: 100.99, image: 'https://images.unsplash.com/photo-1562547256-fa0eaf710133?w=400&h=400&fit=crop', description: 'Crispy chicken strips, dipping sauce', rating: 4.6, reviews: 220 },
  { id: 104, name: 'Cheese Fries', category: 'Appetizers', price: 80.99, image: 'https://images.unsplash.com/photo-1585238341264-8bc5bbb2b9d9?w=400&h=400&fit=crop', description: 'Loaded fries with cheese sauce', rating: 4.5, reviews: 190 },
  { id: 105, name: 'Paneer Tikka', category: 'Appetizers', price: 120.99, image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=400&fit=crop', description: 'Grilled cottage cheese skewers', rating: 4.7, reviews: 260 },
  { id: 106, name: 'Crispy Tofu', category: 'Appetizers', price: 95.99, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop', description: 'Fried tofu with sweet and sour sauce', rating: 4.5, reviews: 170 },
  { id: 107, name: 'Bruschetta', category: 'Appetizers', price: 85.99, image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop', description: 'Toasted bread, tomatoes, basil', rating: 4.6, reviews: 200 },
  { id: 108, name: 'Hummus Platter', category: 'Appetizers', price: 100.99, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop', description: 'Hummus, pita, veggies, olives', rating: 4.6, reviews: 210 },
  { id: 109, name: 'Samosa', category: 'Appetizers', price: 60.99, image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=400&fit=crop', description: 'Fried pastry with spiced potato filling', rating: 4.7, reviews: 280 },
  { id: 110, name: 'Pakora', category: 'Appetizers', price: 70.99, image: 'https://images.unsplash.com/photo-1612874742237-6526221fcf4c?w=400&h=400&fit=crop', description: 'Vegetable fritters, chutney', rating: 4.6, reviews: 240 },

  // ADDITIONAL JAPANESE
  { id: 111, name: 'Dragon Roll', category: 'Japanese', price: 160.99, image: 'https://images.unsplash.com/photo-1621996346565-cd4628902c4a?w=400&h=400&fit=crop', description: 'Shrimp tempura, avocado, eel sauce', rating: 4.8, reviews: 300, isPopular: true },
  { id: 112, name: 'Vegetable Sushi', category: 'Japanese', price: 110.99, image: 'https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=400&fit=crop', description: 'Cucumber, avocado, carrot rolls', rating: 4.5, reviews: 170 },
  { id: 113, name: 'Toro Sushi', category: 'Japanese', price: 180.99, image: 'https://images.unsplash.com/photo-1608050108190-fe39db289053?w=400&h=400&fit=crop', description: 'Premium fatty tuna - 8 pieces', rating: 4.9, reviews: 330 },
  { id: 114, name: 'Miso Soup', category: 'Japanese', price: 50.99, image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=400&fit=crop', description: 'Traditional soybean soup', rating: 4.6, reviews: 190 },
  { id: 115, name: 'Edamame', category: 'Japanese', price: 60.99, image: 'https://images.unsplash.com/photo-1559329007-40790c9fdf4a?w=400&h=400&fit=crop', description: 'Steamed soybeans, sea salt', rating: 4.5, reviews: 160 },
  { id: 116, name: 'Gyoza', category: 'Japanese', price: 80.99, image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd93548?w=400&h=400&fit=crop', description: 'Pan-fried dumplings, dipping sauce', rating: 4.7, reviews: 270 },
  { id: 117, name: 'Okonomiyaki', category: 'Japanese', price: 130.99, image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=400&fit=crop', description: 'Japanese pancake with cabbage', rating: 4.6, reviews: 220 },
  { id: 118, name: 'Yakitori', category: 'Japanese', price: 120.99, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop', description: 'Grilled chicken skewers', rating: 4.7, reviews: 260 },
  { id: 119, name: 'Pad Thai', category: 'Japanese', price: 120.99, image: 'https://images.unsplash.com/photo-1571115764595-644a12c7cb75?w=400&h=400&fit=crop', description: 'Rice noodles, shrimp, egg, peanuts', rating: 4.7, reviews: 290 },
  { id: 120, name: 'Chirashi Bowl', category: 'Japanese', price: 150.99, image: 'https://images.unsplash.com/photo-1563805042-7684c019e157?w=400&h=400&fit=crop', description: 'Rice with assorted toppings', rating: 4.8, reviews: 310 },

  // ADDITIONAL INDIAN
  { id: 121, name: 'Sambar', category: 'Indian', price: 80.99, image: 'https://images.unsplash.com/photo-1568571933382-74d440642117?w=400&h=400&fit=crop', description: 'Lentil based vegetable curry', rating: 4.6, reviews: 210 },
  { id: 122, name: 'Chole Bhature', category: 'Indian', price: 100.99, image: 'https://images.unsplash.com/photo-1595521624669-56046af31670?w=400&h=400&fit=crop', description: 'Chickpea curry with fried bread', rating: 4.7, reviews: 260 },
  { id: 123, name: 'Aloo Gobi', category: 'Indian', price: 90.99, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop', description: 'Potatoes and cauliflower, spices', rating: 4.5, reviews: 180 },
  { id: 124, name: 'Tandoori Fish', category: 'Indian', price: 280.99, image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=400&fit=crop', description: 'Whole fish, tandoori spices', rating: 4.9, reviews: 320, isPopular: true },
  { id: 125, name: 'Chana Masala', category: 'Indian', price: 100.99, image: 'https://images.unsplash.com/photo-1623521906273-d2302f4d48aa?w=400&h=400&fit=crop', description: 'Chickpeas in tomato curry', rating: 4.6, reviews: 200 },
  { id: 126, name: 'Rajma', category: 'Indian', price: 90.99, image: 'https://images.unsplash.com/photo-1618445479027-ac85ddd0c6bd?w=400&h=400&fit=crop', description: 'Kidney beans, onion, tomatoes', rating: 4.5, reviews: 170 },
  { id: 127, name: 'Bhindi Masala', category: 'Indian', price: 100.99, image: 'https://images.unsplash.com/photo-1631867141221-9d5fc23b17f5?w=400&h=400&fit=crop', description: 'Fried okra with spices', rating: 4.6, reviews: 190 },
  { id: 128, name: 'Goat Curry', category: 'Indian', price: 320.99, image: 'https://images.unsplash.com/photo-1641194710667-2aea0b2e03d2?w=400&h=400&fit=crop', description: 'Tender goat meat, aromatic spices', rating: 4.8, reviews: 300 },
  { id: 129, name: 'Naan Bread', category: 'Indian', price: 40.99, image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=400&fit=crop', description: 'Traditional Indian flatbread', rating: 4.7, reviews: 240 },
  { id: 130, name: 'Paratha', category: 'Indian', price: 50.99, image: 'https://images.unsplash.com/photo-1628840042765-356cda07f4ee?w=400&h=400&fit=crop', description: 'Layered Indian flatbread', rating: 4.6, reviews: 210 },

  // ADDITIONAL MEXICAN
  { id: 131, name: 'Carne Asada', category: 'Mexican', price: 180.99, image: 'https://images.unsplash.com/photo-1511689915662-48d19201a921?w=400&h=400&fit=crop', description: 'Grilled marinated beef', rating: 4.8, reviews: 310 },
  { id: 132, name: 'Chile Relleno', category: 'Mexican', price: 160.99, image: 'https://images.unsplash.com/photo-1614049162883-2a378a49b805?w=400&h=400&fit=crop', description: 'Stuffed poblano pepper', rating: 4.7, reviews: 270 },
  { id: 133, name: 'Pozole', category: 'Mexican', price: 150.99, image: 'https://images.unsplash.com/photo-1571407-918286b4a5a0?w=400&h=400&fit=crop', description: 'Hominy soup with pork', rating: 4.6, reviews: 230 },
  { id: 134, name: 'Chiles Rellenos', category: 'Mexican', price: 170.99, image: 'https://images.unsplash.com/photo-1585238341710-4b4e6a7dd188?w=400&h=400&fit=crop', description: 'Poblano peppers stuffed with cheese', rating: 4.7, reviews: 280 },
  { id: 135, name: 'Tamales', category: 'Mexican', price: 90.99, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop', description: 'Cornmeal dough, meat filling', rating: 4.6, reviews: 220 },
  { id: 136, name: 'Tostadas', category: 'Mexican', price: 110.99, image: 'https://images.unsplash.com/photo-1550547990-3b98b8a9b5d0?w=400&h=400&fit=crop', description: 'Crispy tortillas, beans, toppings', rating: 4.5, reviews: 180 },
  { id: 137, name: 'Chiles Poblanos', category: 'Mexican', price: 150.99, image: 'https://images.unsplash.com/photo-1562547256-fa0eaf710133?w=400&h=400&fit=crop', description: 'Roasted poblano peppers', rating: 4.6, reviews: 200 },
  { id: 138, name: 'Huevos Rancheros', category: 'Mexican', price: 120.99, image: 'https://images.unsplash.com/photo-1585238341264-8bc5bbb2b9d9?w=400&h=400&fit=crop', description: 'Eggs, beans, tortillas, salsa', rating: 4.6, reviews: 210 },
  { id: 139, name: 'Fajitas', category: 'Mexican', price: 160.99, image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=400&fit=crop', description: 'Grilled strips, peppers, tortillas', rating: 4.7, reviews: 290, isPopular: true },
  { id: 140, name: 'Queso Fundido', category: 'Mexican', price: 100.99, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop', description: 'Melted cheese dip, chorizo', rating: 4.6, reviews: 200 },

  // ADDITIONAL DESSERTS & BEVERAGES
  { id: 141, name: 'Flan', category: 'Desserts', price: 70.99, image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop', description: 'Creamy custard with caramel sauce', rating: 4.7, reviews: 240 },
  { id: 142, name: 'Mango Lassi', category: 'Beverages', price: 60.99, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop', description: 'Yogurt drink with fresh mango', rating: 4.6, reviews: 200 },
  { id: 143, name: 'Iced Coffee', category: 'Beverages', price: 50.99, image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=400&fit=crop', description: 'Chilled coffee with ice cream', rating: 4.7, reviews: 210 },
  { id: 144, name: 'Fresh Juice', category: 'Beverages', price: 60.99, image: 'https://images.unsplash.com/photo-1612874742237-6526221fcf4c?w=400&h=400&fit=crop', description: 'Fresh fruit juice, no added sugar', rating: 4.5, reviews: 160 },
  { id: 145, name: 'Smoothie Bowl', category: 'Desserts', price: 90.99, image: 'https://images.unsplash.com/photo-1621996346565-cd4628902c4a?w=400&h=400&fit=crop', description: 'Berry smoothie with granola', rating: 4.6, reviews: 180 },
  { id: 146, name: 'Chocolate Mousse', category: 'Desserts', price: 80.99, image: 'https://images.unsplash.com/photo-1645112411341-6c4ee32510e8?w=400&h=400&fit=crop', description: 'Fluffy chocolate mousse', rating: 4.8, reviews: 260 },
  { id: 147, name: 'Milkshake', category: 'Beverages', price: 70.99, image: 'https://images.unsplash.com/photo-1608050108190-fe39db289053?w=400&h=400&fit=crop', description: 'Creamy shake in various flavors', rating: 4.7, reviews: 230 },
  { id: 148, name: 'Panna Cotta', category: 'Desserts', price: 85.99, image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=400&fit=crop', description: 'Italian cream dessert, berry sauce', rating: 4.8, reviews: 270 },
  { id: 149, name: 'Carrot Cake', category: 'Desserts', price: 75.99, image: 'https://images.unsplash.com/photo-1559329007-40790c9fdf4a?w=400&h=400&fit=crop', description: 'Moist carrot cake with cream cheese', rating: 4.7, reviews: 240 },
  { id: 150, name: 'Sweet Lassi', category: 'Beverages', price: 55.99, image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd93548?w=400&h=400&fit=crop', description: 'Sweet yogurt drink with cardamom', rating: 4.6, reviews: 190 },
];

// Main App Component
export default function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentTheme] = useState(theme);

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id);
    } else {
      setCart(cart.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ backgroundColor: currentTheme.light, minHeight: '100vh' }}>
      <Navbar 
        cartCount={cartCount} 
        setShowCart={setShowCart}
        currentTheme={currentTheme}
      />
      <Hero currentTheme={currentTheme} />
      <MenuSection 
        items={realMenuItems} 
        addToCart={addToCart}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        currentTheme={currentTheme}
      />
      <CartModal 
        show={showCart} 
        setShow={setShowCart} 
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        currentTheme={currentTheme}
      />
      <Footer currentTheme={currentTheme} />
    </div>
  );
}