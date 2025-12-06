import React from 'react';
// Cart Modal Component
const CartModal = ({ show, setShow, cart, removeFromCart, updateQuantity }) => {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (!show) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Your Cart</h5>
            <button type="button" className="btn-close" onClick={() => setShow(false)}></button>
          </div>
          <div className="modal-body">
            {cart.length === 0 ? (
              <p className="text-center text-muted">Your cart is empty</p>
            ) : (
              <div>
                {cart.map(item => (
                  <div key={item.id} className="d-flex align-items-center mb-3 pb-3 border-bottom">
                    <div className="fs-3 me-3">{item.image}</div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1">{item.name}</h6>
                      <small className="text-muted">${item.price}</small>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <button 
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                      <button 
                        className="btn btn-sm btn-danger"
                        onClick={() => removeFromCart(item.id)}
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="modal-footer flex-column align-items-stretch">
            <div className="d-flex justify-content-between mb-2">
              <strong>Total:</strong>
              <strong className="text-danger">${total.toFixed(2)}</strong>
            </div>
            <button className="btn btn-danger w-100" disabled={cart.length === 0}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartModal;