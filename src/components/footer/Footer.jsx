import React from 'react'
import './Footer.css'
import {FiInstagram} from 'react-icons/fi'
import {FaLinkedin} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
const Footer = () => {
  return (
    <div>
      <footer>
        <a href="#" className='footer_logo'>Nekshan Kumar</a>

        <ul className='permalinks'>

        <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
          
        </ul>

        <div className="footer_socials">
          <a href="https://instagram.com"><FiInstagram /></a>
          <a href="https://linkedin.com"><FaLinkedin /></a>
          <a href="https://github.com"><BsGithub /></a>
        </div>

        <div className="footer_copyright">
          <small>&copy; NEKSHAN Portfolio. All Rights Reserved.</small>
        </div>
      </footer>
    </div>
  )
}

export default Footer