import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import './CartAmountToggle.css';

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={() => setDecrease()}>
          <FaMinus size={15} />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => setIncrease()}>
          <FaPlus size={15}/>
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;