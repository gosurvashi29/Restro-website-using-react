import ReactDOM from 'react-dom';
import './CartModal.css';

const CartModal = () => {
  const modalContent = (
    <>
      <div className="backdrop" />
      <div className="modal">
        <h2>Your Cart</h2>
        <ul>
          <li className="cart-item">
            <div>
              <h3>Pav Bhaji</h3>
              <div className="summary">
                <span className="price">₹250</span>
                <span className="amount">x 2</span>
              </div>
            </div>
          </li>
          <li className="cart-item">
            <div>
              <h3>Veg Biryani</h3>
              <div className="summary">
                <span className="price">₹180</span>
                <span className="amount">x 1</span>
              </div>
            </div>
          </li>
        </ul>
        <div className="total">
          <span>Total Amount</span>
          <span>₹680</span>
        </div>
        <div className="actions">
          <button className="button">Close</button>
          <button className="button">Order</button>
        </div>
      </div>
    </>
  );

  return ReactDOM.createPortal(modalContent, document.getElementById('overlays'));
};

export default CartModal;
