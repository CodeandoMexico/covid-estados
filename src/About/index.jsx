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
            <h4>Sobre el proyecto</h4>
            <p>Los 32 estados de México tienen distintos protocolos y acciones, adicionales a las medidas federales, para hacer frente al COVID19. Este proyecto recopila, sistematiza y facilita el acceso a información oficial relevante, líneas de atención y medidas de restricción o protección implementadas por los gobiernos estatales.</p>
          </div>
          <div className="col">
            <img src={project} alt="Proyecto" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={methodology} alt="Metodologia" />
          </div>
          <div className="col">
            <h4>Metodología</h4>
            <p>¿Quieres replicar este proyecto en tu país? Descarga nuestra metodología. Si necesitas asistencia técnica, puedes escribirnos a equipo@codeandomexico.org</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4>Sobre CMx</h4>
            <p>Codeando México es una comunidad de hackers que busca generar nuevas formas de participación ciudadana a través de la tecnología. Colaboramos con personas de todos los perfiles: activistas, periodistas, funcionarios públicos, diseñadores.</p>
          </div>
          <div className="col">
            <img src={codeando} alt="Codeando" />
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
