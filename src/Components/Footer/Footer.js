import React from 'react'
import './Footer.css'
import { SiAmazonluna } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (

    <div className='container-fluid footer-container'>
      <div className='text-left left-section'>
        <SiAmazonluna className='social' size={25} style={{ color: 'white', cursor: "pointer", marginRight: '.5rem' }} />
        <p>© {new Date().getFullYear()} Company, Inc</p>
      </div>
      <div className='text-right right-section row'>
        <div className='col-sm-4'>
          <FaTwitter className='social' size={25} style={{ color: 'white', cursor: "pointer" }} />
        </div>
        <div className='col-sm-4'>
          <FaInstagram className='social' size={25} style={{ color: 'white', cursor: "pointer" }} />
        </div>
        <div className='col-sm-4'>
          <FaFacebook className='social' size={25} style={{ color: 'white', cursor: "pointer" }} />
        </div>



      </div>
    </div>

  )
}

export default Footer;