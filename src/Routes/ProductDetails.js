import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Product from '../Components/Product/Product'
import Footer from '../Components/Footer/Footer'

const ProductDetails = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <Product />
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default ProductDetails