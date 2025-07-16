import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import CartContext from './CartContext'; // ✅ Import the context
import './CartModal.css';

const CartModal = ({ onClose }) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const removeHandler = (id) => {
    cartCtx.removeItem(id); // Remove one quantity
  };

  const addHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 }); // Add one more
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <li className="cart-item" key={item.id}>
          <div>
            <h3>{item.name}</h3>
            <div className="summary">
              <span className="price">₹{item.price}</span>
              <span className="amount">x {item.amount}</span>
            </div>
          </div>
          <div className="actions">
            <button onClick={() => removeHandler(item.id)}>-</button>
            <button onClick={() => addHandler(item)}>+</button>
          </div>
        </li>
      ))}
    </ul>
  );

  const modalContent = (
    <>
      <div className="backdrop" onClick={onClose}></div>

      <div className="modal">
        <h2>Your Cart</h2>

        {cartItems}

        <div className="total">
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>

        <div className="actions">
          <button className="button" onClick={onClose}>Close</button>
          {hasItems && <button className="button">Order</button>}
        </div>
      </div>
    </>
  );

  return ReactDOM.createPortal(modalContent, document.getElementById('overlays'));
};

export default CartModal;
