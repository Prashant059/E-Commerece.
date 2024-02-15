import React from 'react'
import { useCartContext } from '../../Context/cart_context'
import CartItem from './CartItem';
import Empty from './EmptyCart/Empty';
import './CartDesc.css';

const CartDesc = () => {
  const { cartItem } = useCartContext();
 
  console.log(`cartItem inside from CartDesc component : ${ cartItem}`)
  let convertObtToArr = Object.keys(cartItem);

  if (convertObtToArr.length === 0) {
    return (
      <Empty />
    );
  }

  return (
    <div className='container'>
      <div className='info-heading grid grid-five-column'>
        <p>item</p>
        <p className='cart-hide'>Price</p>
        <p className='cart-hide'>Quantity</p>
        <p className='cart-hide'>sub-total</p>
        <p>Remove</p>
      </div>

      <hr />

      <div className="cart-item">
        {cartItem.map((curElem) => {
          return <CartItem key={curElem.id} {...curElem}/>;
        })}
      </div>
    </div>
  )
}

export default CartDesc;