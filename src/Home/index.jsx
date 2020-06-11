import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import home from '../assets/home.svg';
import './Home.scss';

function Home({ estados }) {
   const [dropdown, setDropdown] = useState(false);

  let estadosToRender;
  if(estados.length>1) {
    estadosToRender = estados.map((e,i) => (
      <Link className="states-option" to={"/estado/"+e.id} key={i}> { e.fields.estado }</Link>
    ))
  }
  return (
    <React.Fragment>
      <div className="home">
        <div className="cover">
          <h1 className="mobile-title">Directorio<br/>COVID Mx</h1>
          <img src={home} alt="Home COVID CodeandoMexico" />
        </div>
        <div className="msg">
          <h1 className="desk-title">Directorio<br/>COVID Mx</h1>
          <p>Una espacio con información oficial por estado para quién no sabe qué hacer</p>
          <nav className="states">
            <button className="states-action" onClick={() => setDropdown(!dropdown)} type="button">[SELECCIONA]</button>
            {dropdown && <div className="states-options">{estadosToRender}</div>}
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  estados: state.estadosArr
})

export default connect(
  mapStateToProps
)(Home);
