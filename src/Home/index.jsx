import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import home from './assets/home.svg';
import './Home.scss';


function Home({ estados }) {
  // console.clear();
  console.log(JSON.stringify(estados, null, 2))

  let estadosToRender;
  if(estados.length>1) {
    estadosToRender = estados.map((e,i) => (
      <Link className="states-option" to={"/estado/"+e.fields.estado} key={i}> { e.fields.estado }</Link>
    ))
  }
  return (
    <React.Fragment>
      <div className="home">
          <div className="cover">
            <img src={home} alt="Home COVID CodeandoMexico" />
          </div>
          <div className="msg">
            <h1>COVID19</h1>
            <h2>Una guía de información oficial, líneas de atención y medidas por estado frente al COVID</h2>
              <nav className="states">
                <button className="states-action" type="button">[SELECCIONA]</button>
                <div className="states-options">{estadosToRender}</div>
              </nav>
          </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  estados: state.estados
})

export default connect(
  mapStateToProps
)(Home);
