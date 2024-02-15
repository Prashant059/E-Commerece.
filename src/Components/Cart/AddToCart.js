import React, {useState } from 'react'
import { NavLink } from 'react-router-dom';
import './AddToCart.css';
import { useCartContext } from '../../Context/cart_context';
import CartAmountToggle from './CartAmountToggle';

const AddToCart = ({product}) => {
  console.log(product);
  const { addToCart } = useCartContext();
  const { id } = product;
  let [amount, setAmount] = useState(1);


  const setDecrease = () => {
    setAmount(amount--);
  };
  const setIncrease = () => {
    setAmount(amount++);
  };

  return (


    <div className='addToCart-container'>
      <div className='toggle'>
        <CartAmountToggle
          amount={amount}
          setDecrease={setDecrease}
          setIncrease={setIncrease}
        />
      </div>
      

      <NavLink to="/cart" onClick={() => addToCart( id, amount, product)}>
        <button className='btn'>Add to Cart</button>
      </NavLink>
    </div>
  )
}

export default AddToCart;