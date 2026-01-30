import React, { useState } from 'react';

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
              background: `linear-gradient(135deg, ${currentTheme.light}, ${currentTheme.white})`
            }}
          >
            <img 
              src={item.image} 
              alt={item.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x400?text=' + encodeURIComponent(item.name);
              }}
            />
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
          <h5 className="card-title fw-bold mb-2" style={{ fontSize: '1.1rem', fontWeight: '800' }}><strong>{item.name}</strong></h5>
          <p className="card-text text-muted small mb-3" style={{ fontWeight: '500' }}><strong>{item.description}</strong></p>
          <div className="d-flex align-items-center mb-2">
            <span style={{ color: currentTheme.accent }}>⭐</span>
            <span className="ms-1 small fw-semibold">{item.rating}</span>
            <span className="ms-2 small text-muted">({item.reviews} reviews)</span>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <span className="h5 mb-0 fw-bold" style={{ color: currentTheme.primary, fontSize: '1.25rem', fontWeight: '900' }}>
              <strong>${item.price.toFixed(2)}</strong>
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

export default MenuItemCard;
