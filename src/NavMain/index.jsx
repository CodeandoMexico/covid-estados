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
      <NavLink to="/"><img className="nav-codeando" src={logo} alt="codeando mexico" /></NavLink>
      <div className="nav-sobre">
        <NavLink className="nav-link" to="/sobre-el-proyecto">Sobre el proyecto</NavLink>
        <div>
          <NavLink to="https://www.facebook.com/CodeandoMexico/"><img className="nav-redes" src={facebook} alt="facebook" /></NavLink>
          <NavLink to="https://twitter.com/CodeandoMexico"><img className="nav-redes" src={twitter} alt="twitter" /></NavLink>
          <NavLink to="https://github.com/CodeandoMexico/covid-estados"><img className="nav-redes" src={github} alt="github" /></NavLink>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
