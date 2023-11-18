import React from 'react'
import './Header.css'
import CTA from './CTA'
import Monis_professional from '../../asset/Monis_professional_2.png'
import HeaderSocial from './HeaderSocials'
import { result, size } from 'lodash'
const Header = () => {
  return (
   <header>
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>
  <span>M</span>
  <span>o</span>
  <span>h</span>
  <span>a</span>
  <span>m</span>
  <span>m</span>
  <span>a</span>
  <span>d</span>
  <span>&nbsp;</span>
  <span>M</span>
  <span>o</span>
  <span>n</span>
  <span>i</span>
  <span>s</span>
</h1>

      <h5 className="text-light">Game Developer</h5>
      <CTA/>
      <HeaderSocial />
      
      <div className="me">
        <img src={Monis_professional} alt="Monis_professional" />
      </div>
      <a href="#contact" className='scroll_down'>Scroll_down</a>
    </div>
   </header>
  )
}

export default Header

