import React from 'react'
// import LoginFrom from '../Components/Login/LoginFrom'
import Navbar from '../Components/Navbar/Navbar'
import Product from '../Components/Product/Product'
import Slide from '../Components/Sliders/Slide';
import Service from '../Components/Services/Service';
import Trusted from '../Components/Trusted/Trusted';
import Footer from '../Components/Footer/Footer';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Slide />
      <Product />
      <Service />
      <Trusted />
      <Footer />
    </div>
  )
}

export default Home;