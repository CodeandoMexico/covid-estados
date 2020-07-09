import React from "react";
import { connect } from "react-redux";

import { LinkSelect } from "../Components";
import Loader from "../Loader";
import "./Home.scss";
import home from "../assets/home.svg";

function Home({ estados, load }) {
  return (
    <React.Fragment>
      {load ? (
        <Loader />
      ) : (
        <>
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
                Un espacio con información oficial por estado para quien no
                sabe qué hacer
              </p>
              <LinkSelect options={estados} placeholder="[SELECCIONA]" />
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  const {
    estados: { data: estados, load },
  } = state;
  return {
    estados,
    load,
  };
};

export default connect(mapStateToProps)(Home);
