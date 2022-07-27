import React from 'react'
import './Header.css'
import CTA from './CTA'
import NIKS from '../../assets/niks2.png'
import HeaderSocials from './Headersocials'
const Header = () => {
  return (
   <div className="container header_container">
      <h5>Hello i'm</h5>
      <h1>Nekshan Kumar</h1>
      <h5 className="text-light"> Frontend Developer</h5>
      <CTA />
      
      <div className="me">
        <img src={NIKS} alt="niks2" />
      </div>
      <HeaderSocials/>
      <a href="#contact" className='scroll_down'> Scroll Down </a>
      
    </div>
  )
}

export default Header