import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


// Color Theme Configuration
const theme = {
  primary: '#ef4908ff',      // Vibrant Orange
  secondary: '#004E89',    // Deep Blue
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
              Hungry? Order Now! 🍕
            </h1>
            <p className="lead mb-4 fs-5">
              Fresh food delivered to your doorstep in 30 minutes. Choose from 1000+ restaurants.
            </p>
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
            <div className="fs-1" style={{ fontSize: '8rem' }}>
              🍔🍕🍣🌮🍜
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
            className="d-flex align-items-center justify-content-center"
            style={{ 
              height: '180px',
              background: `linear-gradient(135deg, ${currentTheme.light}, ${currentTheme.white})`,
              fontSize: '5rem'
            }}
          >
            {item.image}
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
  { id: 1, name: 'Margherita Pizza', category: 'Pizza', price: 120.99, image: '🍕', description: 'Fresh mozzarella, tomato sauce, basil', rating: 4.8, reviews: 320, isPopular: true },
  { id: 2, name: 'Pepperoni Pizza', category: 'Pizza', price: 140.99, image: '🍕', description: 'Classic pepperoni with extra cheese', rating: 4.9, reviews: 450, isPopular: true },
  { id: 3, name: 'Veggie Supreme Pizza', category: 'Pizza', price: 130.99, image: '🍕', description: 'Bell peppers, olives, mushrooms, onions', rating: 4.6, reviews: 280 },
  { id: 4, name: 'BBQ Chicken Pizza', category: 'Pizza', price: 150.99, image: '🍕', description: 'BBQ sauce, grilled chicken, red onions', rating: 4.7, reviews: 310 },
  { id: 5, name: 'Hawaiian Pizza', category: 'Pizza', price: 130.99, image: '🍕', description: 'Ham, pineapple, mozzarella', rating: 4.5, reviews: 240 },
  { id: 6, name: 'Meat Lovers Pizza', category: 'Pizza', price: 160.99, image: '🍕', description: 'Pepperoni, sausage, bacon, ham', rating: 4.8, reviews: 380 },

  // BURGERS
  { id: 7, name: 'Classic Beef Burger', category: 'Burgers', price: 90.99, image: '🍔', description: 'Angus beef, lettuce, tomato, pickles', rating: 4.6, reviews: 290 },
  { id: 8, name: 'Double Cheese Burger', category: 'Burgers', price: 110.99, image: '🍔', description: 'Two beef patties, double cheddar cheese', rating: 4.7, reviews: 350 },
  { id: 9, name: 'Chicken Burger', category: 'Burgers', price: 100.99, image: '🍔', description: 'Crispy chicken, mayo, lettuce', rating: 4.5, reviews: 270 },
  { id: 10, name: 'Veggie Burger', category: 'Burgers', price: 90.99, image: '🍔', description: 'Plant-based patty, avocado, sprouts', rating: 4.4, reviews: 200 },
  { id: 11, name: 'Bacon BBQ Burger', category: 'Burgers', price: 120.99, image: '🍔', description: 'Beef patty, crispy bacon, BBQ sauce', rating: 4.8, reviews: 320, isPopular: true },

  // SALADS
  { id: 12, name: 'Caesar Salad', category: 'Salads', price: 80.99, image: '🥗', description: 'Romaine, parmesan, croutons, caesar dressing', rating: 4.5, reviews: 180 },
  { id: 13, name: 'Greek Salad', category: 'Salads', price: 90.99, image: '🥗', description: 'Feta cheese, olives, cucumber, tomatoes', rating: 4.6, reviews: 200 },
  { id: 14, name: 'Garden Fresh Salad', category: 'Salads', price: 120.99, image: '🥗', description: 'Mixed greens, cherry tomatoes, carrots', rating: 4.4, reviews: 150 },
  { id: 15, name: 'Chicken Caesar Salad', category: 'Salads', price: 110.99, image: '🥗', description: 'Grilled chicken, romaine, parmesan', rating: 4.7, reviews: 220 },

  // PASTA
  { id: 16, name: 'Spaghetti Carbonara', category: 'Pasta', price: 100.99, image: '🍝', description: 'Creamy pasta with bacon and parmesan', rating: 4.8, reviews: 290, isPopular: true },
  { id: 17, name: 'Penne Arrabbiata', category: 'Pasta', price: 130.99, image: '🍝', description: 'Spicy tomato sauce with garlic', rating: 4.7, reviews: 250 },
  { id: 18, name: 'Fettuccine Alfredo', category: 'Pasta', price: 120.99, image: '🍝', description: 'Creamy alfredo sauce, parmesan', rating: 4.6, reviews: 270 },
  { id: 19, name: 'Lasagna Bolognese', category: 'Pasta', price: 120.99, image: '🍝', description: 'Layered pasta, meat sauce, cheese', rating: 4.8, reviews: 310 },
  { id: 20, name: 'Pasta Primavera', category: 'Pasta', price: 130.99, image: '🍝', description: 'Seasonal vegetables, olive oil, garlic', rating: 4.5, reviews: 190 },

  // APPETIZERS
  { id: 21, name: 'Buffalo Chicken Wings', category: 'Appetizers', price: 100.99, image: '🍗', description: '8 pcs spicy wings with blue cheese', rating: 4.9, reviews: 410, isPopular: true },
  { id: 22, name: 'Mozzarella Sticks', category: 'Appetizers', price: 70.99, image: '🧀', description: '6 pcs crispy fried with marinara', rating: 4.5, reviews: 190 },
  { id: 23, name: 'Onion Rings', category: 'Appetizers', price: 60.99, image: '🧅', description: 'Golden crispy onion rings', rating: 4.4, reviews: 170 },
  { id: 24, name: 'Spring Rolls', category: 'Appetizers', price: 70.99, image: '🥟', description: '4 pcs veggie spring rolls, sweet chili sauce', rating: 4.6, reviews: 210 },
  { id: 25, name: 'Garlic Bread', category: 'Appetizers', price: 50.99, image: '🥖', description: 'Toasted bread with garlic butter', rating: 4.5, reviews: 180 },

  // JAPANESE CUISINE
  { id: 26, name: 'Salmon Sushi', category: 'Japanese', price: 150.99, image: '🍣', description: 'Fresh salmon nigiri - 8 pieces', rating: 4.9, reviews: 340 },
  { id: 27, name: 'California Roll', category: 'Japanese', price: 120.99, image: '🍣', description: 'Crab, avocado, cucumber', rating: 4.7, reviews: 280 },
  { id: 28, name: 'Spicy Tuna Roll', category: 'Japanese', price: 140.99, image: '🍣', description: 'Spicy tuna, cucumber, sesame', rating: 4.8, reviews: 300 },
  { id: 29, name: 'Tonkotsu Ramen', category: 'Japanese', price: 160.99, image: '🍜', description: 'Pork belly, egg, bamboo shoots, noodles', rating: 4.9, reviews: 380, isPopular: true },
  { id: 30, name: 'Chicken Teriyaki Bowl', category: 'Japanese', price: 130.99, image: '🍱', description: 'Grilled chicken, rice, teriyaki sauce', rating: 4.7, reviews: 270 },
  { id: 31, name: 'Vegetable Tempura', category: 'Japanese', price: 110.99, image: '🥘', description: 'Assorted fried vegetables, tempura sauce', rating: 4.6, reviews: 230 },

  // INDIAN CUISINE
  { id: 32, name: 'Chicken Biryani', category: 'Indian', price: 240.99, image: '🍛', description: 'Basmati rice, spiced chicken, herbs', rating: 4.9, reviews: 420, isPopular: true },
  { id: 33, name: 'Mutton Biryani', category: 'Indian', price: 320.99, image: '🍛', description: 'Tender mutton, aromatic basmati rice', rating: 4.8, reviews: 390, isPopular: true },
  { id: 34, name: 'Mutton Keema', category: 'Indian', price: 300.99, image: '🍛', description: 'Minced mutton curry with spices', rating: 4.7, reviews: 310 },
  { id: 35, name: 'Butter Chicken', category: 'Indian', price: 220.99, image: '🍛', description: 'Creamy tomato curry with tandoori chicken', rating: 4.8, reviews: 380 },
  { id: 36, name: 'Paneer Tikka Masala', category: 'Indian', price: 220.99, image: '🍛', description: 'Grilled cottage cheese in spicy gravy', rating: 4.6, reviews: 290 },
  { id: 37, name: 'Tandoori Chicken', category: 'Indian', price: 600.99, image: '🍗', description: 'Clay oven roasted spiced chicken', rating: 4.7, reviews: 320 },
  { id: 38, name: 'Dal Makhani', category: 'Indian', price: 100.99, image: '🥘', description: 'Creamy black lentils with butter', rating: 4.6, reviews: 260 },
  { id: 39, name: 'Lamb Rogan Josh', category: 'Indian', price: 170.99, image: '🍛', description: 'Tender lamb in aromatic kashmiri curry', rating: 4.8, reviews: 340 },
  { id: 40, name: 'Chicken 65', category: 'Indian', price: 220.99, image: '🍗', description: 'Spicy fried chicken appetizer', rating: 4.7, reviews: 300 },

  // MEXICAN CUISINE
  { id: 41, name: 'Beef Tacos', category: 'Mexican', price: 110.99, image: '🌮', description: 'Three soft tacos with seasoned beef', rating: 4.8, reviews: 310, isPopular: true },
  { id: 42, name: 'Chicken Burrito', category: 'Mexican', price: 220.99, image: '🌯', description: 'Grilled chicken, rice, beans, cheese', rating: 4.6, reviews: 260 },
  { id: 43, name: 'Beef Quesadilla', category: 'Mexican', price: 120.99, image: '🫓', description: 'Grilled tortilla with beef and cheese', rating: 4.7, reviews: 280 },
  { id: 44, name: 'Nachos Supreme', category: 'Mexican', price: 100.99, image: '🧀', description: 'Loaded nachos, cheese, jalapeños, salsa', rating: 4.6, reviews: 240 },
  { id: 45, name: 'Chicken Enchiladas', category: 'Mexican', price: 200.99, image: '🌯', description: 'Rolled tortillas with chicken, sauce', rating: 4.7, reviews: 290 },
  { id: 46, name: 'Guacamole & Chips', category: 'Mexican', price: 180.99, image: '🥑', description: 'Fresh avocado dip with tortilla chips', rating: 4.5, reviews: 200 },

  // DESSERTS
  { id: 47, name: 'Chocolate Lava Cake', category: 'Desserts', price: 60.99, image: '🍰', description: 'Molten chocolate center, vanilla ice cream', rating: 4.8, reviews: 220, isPopular: true },
  { id: 48, name: 'New York Cheesecake', category: 'Desserts', price: 70.99, image: '🍰', description: 'Classic creamy cheesecake, berry sauce', rating: 4.7, reviews: 200 },
  { id: 49, name: 'Tiramisu', category: 'Desserts', price: 100.99, image: '🍮', description: 'Classic Italian coffee dessert', rating: 4.9, reviews: 240 },
  { id: 50, name: 'Ice Cream Sundae', category: 'Desserts', price: 80.99, image: '🍦', description: 'Three scoops with toppings', rating: 4.7, reviews: 190 },
  { id: 51, name: 'Apple Pie', category: 'Desserts', price: 60.99, image: '🥧', description: 'Warm apple pie with cinnamon', rating: 4.6, reviews: 180 },
  { id: 52, name: 'Churros', category: 'Desserts', price: 60.99, image: '🍩', description: 'Fried dough pastry with chocolate sauce', rating: 4.7, reviews: 210 },
  { id: 53, name: 'Gulab Jamun', category: 'Desserts', price: 50.99, image: '🍡', description: 'Indian milk dumplings in sweet syrup', rating: 4.8, reviews: 230 },
  { id: 54, name: 'Brownie Fudge', category: 'Desserts', price: 60.99, image: '🍫', description: 'Rich chocolate brownie with ice cream', rating: 4.8, reviews: 250 },

  // NON-VEG SPECIALS
  { id: 55, name: 'Grilled Salmon', category: 'Non-Veg', price: 220.99, image: '🐟', description: 'Atlantic salmon, lemon butter sauce', rating: 4.9, reviews: 310 },
  { id: 56, name: 'Ribeye Steak', category: 'Non-Veg', price: 240.99, image: '🥩', description: '12oz premium ribeye, mashed potatoes', rating: 4.9, reviews: 380, isPopular: true },
  { id: 57, name: 'BBQ Ribs', category: 'Non-Veg', price: 190.99, image: '🍖', description: 'Slow-cooked pork ribs, BBQ sauce', rating: 4.8, reviews: 340 },
  { id: 58, name: 'Fish and Chips', category: 'Non-Veg', price: 140.99, image: '🐟', description: 'Battered cod, french fries, tartar sauce', rating: 4.7, reviews: 290 },
  { id: 59, name: 'Prawn Curry', category: 'Non-Veg', price: 200.99, image: '🦐', description: 'Jumbo prawns in coconut curry', rating: 4.8, reviews: 320 },
  { id: 60, name: 'Lamb Chops', category: 'Non-Veg', price: 210.99, image: '🍖', description: 'Grilled lamb chops with herbs', rating: 4.9, reviews: 350, isPopular: true },
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