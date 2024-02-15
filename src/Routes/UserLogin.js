import React from 'react'
import LoginFrom from '../Components/Login/LoginFrom'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const UserLogin = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <LoginFrom />
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default UserLogin