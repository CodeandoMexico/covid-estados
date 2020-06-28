import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/codeandomexico-bco.svg";
import facebook from "../assets/facebook-bco.svg";
import twitter from "../assets/twitter-bco.svg";
import github from "../assets/github-bco.svg";
import "./footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <NavLink to="http://codeandomexico.org/">
          <img src={logo} alt="codeando mexico" />
        </NavLink>
        <p>
            Hecho con <span role="img" aria-label="sheep">❤️</span> por la comunidad de{" "}
            <NavLink className="footer-link" to="http://codeandomexico.org/">
              Codeando México
            </NavLink>
        </p>
        <div className="footer-social">
          <NavLink className="footer-link" to="/sobre-el-proyecto">
            Sobre el proyecto
          </NavLink>
          <div>
            <a
              href="https://www.facebook.com/CodeandoMexico"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="footer-redes" src={facebook} alt="facebook" />
            </a>
            <a
              href="https://twitter.com/CodeandoMexico"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="footer-redes" src={twitter} alt="twitter" />
            </a>
            <a
              href="https://github.com/CodeandoMexico/covid-estados"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="footer-redes" src={github} alt="github" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
