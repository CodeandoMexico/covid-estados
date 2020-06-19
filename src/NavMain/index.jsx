import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/codeandomexico.svg';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import github from '../assets/github.svg';
import './nav.scss';

function NavBar() {
  return (
    <header className="nav-main">
      <NavLink to="/covid-estados/"><img className="nav-codeando" src={logo} alt="codeando mexico" /></NavLink>
      <div className="nav-sobre">
        <NavLink className="nav-link" to="/sobre-el-proyecto">Sobre el proyecto</NavLink>
        <div>
          <a href="https://www.facebook.com/CodeandoMexico" target="_blank" rel="noopener noreferrer"><img className="nav-redes" src={facebook} alt="facebook" /></a>
          <a href="https://twitter.com/CodeandoMexico" target="_blank" rel="noopener noreferrer"><img className="nav-redes" src={twitter} alt="twitter" /></a>
          <a href="https://github.com/CodeandoMexico/covid-estados" target="_blank" rel="noopener noreferrer"><img className="nav-redes" src={github} alt="github" /></a>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
