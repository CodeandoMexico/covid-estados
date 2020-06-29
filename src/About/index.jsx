import React from 'react';
import project from './assets/project.svg';
import methodology from './assets/methodology.svg';
import codeando from './assets/codeando.svg';
import ndi from './assets/ndi.png';
import './About.scss';

function About() {
  return (
    <React.Fragment>
      <div className="about-container">
        <div className="row">
          <div className="col">
            <img src={project} alt="Proyecto" />
          </div>
          <div className="col col-text">
            <h4>Sobre el proyecto</h4>
            <p>Con el fin de la emergencia a nivel nacional, ahora es competencia de los 32 estados definir protocolos y medidas para hacer frente al COVID19. Este proyecto recopila, sistematiza y facilita el acceso a información oficial relevante, líneas de atención y medidas de restricción o protección implementadas por los gobiernos estatales.</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={methodology} alt="Metodologia" />
          </div>
          <div className="col col-text">
            <h4>Metodología</h4>
            <p>¿Quieres replicar este proyecto en tu país? Descarga nuestra metodología. Si necesitas asistencia técnica, puedes escribirnos a equipo@codeandomexico.org</p>
          </div>
        </div>
        <div className="row">
        <div className="col">
            <img src={codeando} alt="Codeando" />
          </div>
          <div className="col col-text">
            <h4>Sobre CMX</h4>
            <p>Codeando México es una comunidad de hackers cívicos que busca generar nuevas formas de participación ciudadana a través de la tecnología. Colaboramos con personas de todos los perfiles: activistas, periodistas, funcionarias públicas, diseñadoras.</p>
          </div>
        </div>
      </div>
      <footer className="sponsors">
        <div className="about-container">
          <h4>Con el apoyo de</h4>
          <img src={ndi} alt="NDI logo" />
        </div>
      </footer>
    </React.Fragment>
  );
}

export default About;
