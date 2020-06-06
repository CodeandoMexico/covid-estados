import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import home from './assets/home.svg';
import './Home.scss';

import {
  Icon,
  Container,
  Counter,
  Box,
} from '../Components';

function Home({ estados }) {
   const [dropdown, setDropdown] = useState(false);
  // console.clear();
  console.log(JSON.stringify(estados, null, 2))

  let estadosToRender;
  if(estados.length>1) {
    estadosToRender = estados.map((e,i) => (
      <Link className="states-option" to={"/estado/"+e.id} key={i}> { e.fields.estado }</Link>
    ))
  }
  return (
    <React.Fragment>
      <Container>
        <Container alignItems={'center'}>
          <img src={home} alt="Home COVID CodeandoMexico" />
        </Container>
        <Container>
          <div className="msg">
            <h1>COVID19</h1>
            <h2>Una guía de información oficial, líneas de atención y medidas por estado frente al COVID</h2>
              <nav className="states">
                <button className="states-action" onClick={() => setDropdown(!dropdown)} type="button">[SELECCIONA]</button>
                {dropdown && <div className="states-options">{estadosToRender}</div>}
              </nav>
          </div>
        </Container>
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  estados: state.estadosArr
})

export default connect(
  mapStateToProps
)(Home);
