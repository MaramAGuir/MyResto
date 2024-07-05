// Cart.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { removeFromCart, updateCartItemQuantity } from '../state/Cart/cartSlice';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Cart.css'; // Import your CSS file
import RatingPopup from './Ratingpopup'; // Import the RatingPopup component

const Cart = ({ onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [showRatingPopup, setShowRatingPopup] = useState(false);

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(updateCartItemQuantity({ itemId, newQuantity }));
  };

  const handleConfirm = () => {
    // Show the rating popup
    setShowRatingPopup(true);
  };

  // Calculate total price of items in the cart
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className={`cart-overlay active`} onClick={onClose}>
        <div className={`cart-container active`} onClick={(e) => e.stopPropagation()}>
          <button className="close-cart-btn" onClick={onClose}>
            &times;
          </button>
          <h2>Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul className="cart-items">
                {cartItems.map((item) => (
                  <li key={item.id} className="cart-item">
                    <div className="cart-item-details">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-item-image"
                      />
                      <div className="cart-item-info">
                        <h3>{item.name}</h3>
                        <p className="cart-item-price">
                          ${item.price.toFixed(2)}
                        </p>
                        <div className="cart-item-actions">
                          <button
                            className="cart-item-action-btn"
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            className="cart-item-action-btn"
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                          <button
                            className="cart-item-remove-btn"
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="cart-total">
                <p>Total: ${totalPrice.toFixed(2)}</p>
              </div>
              <button className="cart-confirm-btn" onClick={handleConfirm}>
                Confirm Order
              </button>
            </>
          )}
        </div>
      </div>

      {/* Rating Popup */}
      <RatingPopup show={showRatingPopup} onClose={() => setShowRatingPopup(false)} />
    </>
  );
};

export default Cart;
