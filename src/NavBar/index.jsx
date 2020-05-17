import React from 'react';
import { NavLink } from 'react-router-dom';
import SocialLink from './SocialLink';
import codeando from './assets/codeandomexico.svg';
import './NavBar.scss';

function NavBar() {
  return (
    <header className="nav-main">
      <NavLink to="/">
        <img src={codeando} alt="CodeandoMexico" />
      </NavLink>
      <nav className="nav">
        <NavLink to="/about">About</NavLink>
        <SocialLink to="https://www.facebook.com/" title="Facebook" />
        <SocialLink to="https://github.com/CodeandoMexico/covid-estados" title="Github" />
        <SocialLink to="https://www.twitter.com/" title="Twitter" />
      </nav>
    </header>
  );
}

export default NavBar;
