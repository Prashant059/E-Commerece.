import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa'
import {FiShoppingCart} from 'react-icons/fi'
import './Navbar.css';
import { useCartContext } from '../../Context/cart_context';


const Navbar = () => {
    const {total_item} = useCartContext();
    
    const [click, setClick] = useState(false);
    const [color, setColor] = useState(false);


    const handleClick = () => {
        setClick(!click);
    };

    const colorHandler = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", colorHandler)

  return (
          <div className={`container-fluid ${color ? "header header-bg" : "header"}`}>

              <Link to="/">
                  <h1>E-commerce</h1>
              </Link>

              <ul className={click ? "nav-menu active" : "nav-menu"}>

                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/productdetails">ProductDetails</Link>
                  </li>
                  <li>
                      <Link to="/login">Login</Link>
                  </li>
                  <li>
                      <Link to="/registration">Registration</Link>
                  </li>
                  <li>
                      <Link to="/cart" className="navbar-link cart-trolley--link">
                         <FiShoppingCart className="cart-trolley"/>
                         <span className="cart-total--item">{total_item}</span>
                      </Link>
                  </li>
              </ul>

              <div className='hamburger' onClick={handleClick}>

                  {click ? (<FaTimes size={20} style={{ color: "white" }} />)
                      :
                      (<FaBars size={20} style={{ color: "white" }} />)}

              </div>
          </div>
  )
}

export default Navbar