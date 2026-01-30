import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { orderAPI } from '../api/apiClient';
import '../styles/OrderHistory.css';

export default function OrderHistory({ onClose }) {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await orderAPI.getAll();
      setOrders(response.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelOrder = async (orderId) => {
    try {
      await orderAPI.cancel(orderId);
      setOrders(orders.map((order) =>
        order._id === orderId ? { ...order, status: 'cancelled' } : order
      ));
    } catch (err) {
      alert('Failed to cancel order: ' + err.message);
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      pending: '#FFA500',
      confirmed: '#4169E1',
      preparing: '#FF6347',
      'on-the-way': '#32CD32',
      delivered: '#228B22',
      cancelled: '#DC143C',
    };
    return colors[status] || '#666';
  };

  return (
    <div className="modal-overlay">
      <div className="order-history-modal">
        <div className="modal-header">
          <h2>Order History</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        {loading ? (
          <div className="loading">Loading orders...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : orders.length === 0 ? (
          <div className="no-orders">No orders found</div>
        ) : (
          <div className="orders-list">
            {orders.map((order) => (
              <div key={order._id} className="order-card">
                <div className="order-header">
                  <div>
                    <h4>Order #{order._id.slice(-6)}</h4>
                    <p>{new Date(order.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div
                    className="order-status"
                    style={{ color: getStatusColor(order.status) }}
                  >
                    {order.status.toUpperCase()}
                  </div>
                </div>

                <div className="order-items">
                  {order.items.map((item) => (
                    <div key={item._id} className="order-item">
                      <span>{item.menuItem?.name || 'Item'}</span>
                      <span>x{item.quantity}</span>
                      <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="order-footer">
                  <div className="order-total">
                    Total: <strong>₹{order.totalPrice.toFixed(2)}</strong>
                  </div>
                  {['pending', 'confirmed'].includes(order.status) && (
                    <button
                      className="cancel-btn"
                      onClick={() => handleCancelOrder(order._id)}
                    >
                      Cancel Order
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
