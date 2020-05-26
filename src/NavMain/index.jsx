import React from 'react';
import { NavLink } from 'react-router-dom';
import CodeandoMx from './CodeandoMx';
import './nav.scss';

function NavBar() {
  return (
    <header className="nav-main">
      <NavLink to="/"><CodeandoMx /></NavLink>
      <NavLink to="/sobre-el-proyecto">Sobre el Proyecto</NavLink>
    </header>
  );
}

export default NavBar;
