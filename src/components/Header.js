import React, { useState } from 'react';
import eDex from '../assets/eDex.png';
import './Header.css';
import { NavLink, useNavigate } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='Header'>
      <img src={eDex} alt="" className='edex-logo' />
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`header-ul ${isOpen ? 'open' : ''}`}>
        <NavLink to='/home' activeClassName="active"><li className='header-li'>Home</li></NavLink>
        <NavLink to='/about' activeClassName="active"><li className='header-li'>About</li></NavLink>
        <NavLink to='/blog' activeClassName="active"><li className='header-li'>Blog</li></NavLink>
      </ul>
      <button onClick={() => navigate('/contact')} className='header-btn'><p>Contact</p></button>
    </div>
  );
}

export default Header;
