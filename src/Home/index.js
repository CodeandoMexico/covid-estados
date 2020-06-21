import React from "react";
import { connect } from "react-redux";

import { LinkSelect } from "../Components";
import "./Home.scss";
import home from "../assets/home.svg";

function Home({ states }) {
  let listStates = states.map((s) => {
    return {
      option: s.fields.estado,
      url: `/estado/${s.id}`,
      id: s.id,
    };
  });
  return (
    <React.Fragment>
      <div className="home">
        <div className="cover">
          <h1 className="mobile-title">
            Directorio
            <br />
            COVID Mx
          </h1>
          <img src={home} alt="Home COVID CodeandoMexico" />
        </div>
        <div className="msg">
          <h1 className="desk-title">
            Directorio
            <br />
            COVID Mx
          </h1>
          <p>
            Una espacio con información oficial por estado para quien no sabe
            qué hacer
          </p>
          <LinkSelect options={listStates} placeholder="[SELECCIONA]" />
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  states: state.estadosArr,
});

export default connect(mapStateToProps)(Home);
