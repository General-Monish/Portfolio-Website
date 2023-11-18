import React from 'react'
import './Footer.css'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FaTwitter} from 'react-icons/fa'
const Footer = () => {
  return (
      <footer id='footer'>
        <a className='footer__logo'>Monis</a>
  
        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experiance">Experiance</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
  
        <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mohammad-monis-9b96471b0/" target="_blank"><AiOutlineLinkedin/></a>
        <a href="https://twitter.com/home?lang=en-in" target="_blank"><FaTwitter/></a>
        </div>
        <div className="footer__copyright">
          <small>&copy; Monis Website. All Rights Reserved.</small>
        </div>
    </footer>
  )
}

export default Footer