import React, { useState } from 'react';
import { connect } from 'react-redux';
import home from '../assets/home.svg';
import './Home.scss';
import { EstadosDropDown } from '../Components'

function Home({ estados }) {
   const [dropdown, setDropdown] = useState(false);

  return (
    <React.Fragment>
      <div className="home">
        <div className="cover">
          <h1 className="mobile-title">Directorio<br/>COVID Mx</h1>
          <img src={home} alt="Home COVID CodeandoMexico" />
        </div>
        <div className="msg">
          <h1 className="desk-title">Directorio<br/>COVID Mx</h1>
          <p>Una espacio con información oficial por estado para quien no sabe qué hacer</p>
          <nav className="states">
            <button className="states-action" onClick={() => setDropdown(!dropdown)} type="button">[SELECCIONA]</button>
            {dropdown && <EstadosDropDown estados={estados}/>}
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
