import React from 'react'
import Registration from '../Components/Registration/Registration'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const UserRegistration = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <Registration />
      
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default UserRegistration