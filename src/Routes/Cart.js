import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import CartDesc from '../Components/Cart/CartDesc';
import CartItem from '../Components/Cart/CartItem';


const Cart = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <CartDesc />
      <CartItem />
    </div>
  )
}

export default Cart