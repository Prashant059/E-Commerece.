import React from 'react'
import SingleProduct from '../Components/Product/SingleProduct'
import Navbar from '../Components/Navbar/Navbar'


const ProductOverView = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <SingleProduct />
    </div>
  )
}

export default ProductOverView