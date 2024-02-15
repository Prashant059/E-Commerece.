import React from 'react'
import './Empty.css';
import CartImage from '../../../Assets/EmptyCart.jpg';

const Empty = () => {
  return (
    <div className='empty-container container-fluid row'>
      <div className='left-part col-sm-6 text-center'>
        <p>Cart is Empty 😢</p>
      </div>
      <div className='right-part col-sm-6'>
        <img src={CartImage} alt='EmptyCartImage'/>
      </div>
    </div>
  )
}

export default Empty