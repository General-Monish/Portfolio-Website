import React, { useState } from 'react';
import './Nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineBook } from 'react-icons/ai';
import { MdHomeRepairService } from 'react-icons/md';
import { IoMdContacts } from 'react-icons/io';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  const handleNavClick = (navId) => {
    setActiveNav(navId);
    rotateNavIcons();
  };

  const rotateNavIcons = () => {
    const icons = document.querySelectorAll('.nav-item');
    icons.forEach((icon) => {
      icon.classList.add('rotate-animation');
      setTimeout(() => {
        icon.classList.remove('rotate-animation');
      }, 1000);
    });
  };

  return (
    <nav className="custom-nav">
      <a
        href="#"
        onClick={() => handleNavClick('#')}
        className={`nav-item ${activeNav === '#' ? 'active' : ''}`}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => handleNavClick('#about')}
        className={`nav-item ${activeNav === '#about' ? 'active' : ''}`}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => handleNavClick('#experience')}
        className={`nav-item ${activeNav === '#experience' ? 'active' : ''}`}
      >
        <AiOutlineBook />
      </a>
      <a
        href="#services"
        onClick={() => handleNavClick('#services')}
        className={`nav-item ${activeNav === '#services' ? 'active' : ''}`}
      >
        <MdHomeRepairService />
      </a>
      <a
        href="#contact"
        onClick={() => handleNavClick('#contact')}
        className={`nav-item ${activeNav === '#contact' ? 'active' : ''}`}
      >
        <IoMdContacts />
      </a>
    </nav>
  );
};

export default Nav;
