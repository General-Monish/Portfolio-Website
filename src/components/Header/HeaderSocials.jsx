import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'
const HeaderSocial = () => {
  return (
      <div className='header__socials' >
        <a href="https://www.linkedin.com/in/mohammad-monis-9b96471b0/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/General-Monish" target="_blank"><FaGithub/></a>
        <a href="https://twitter.com/home?lang=en-in" target="_blank"><FiTwitter/></a>
    </div>
  )
}

export default HeaderSocial