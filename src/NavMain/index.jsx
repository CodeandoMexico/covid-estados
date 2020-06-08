import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/codeandomexico.svg';
import './nav.scss';

function NavBar() {
  console.log(window.location.href)
  return (
    <header className="nav-main">
      <NavLink to="/"><img src={logo} alt="codeando mexico" /></NavLink>
      <NavLink className="nav-link" to="/sobre-el-proyecto">Sobre el Proyecto</NavLink>
    </header>
  );
}

export default NavBar;
