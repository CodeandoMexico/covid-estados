import React from 'react';
import home from './assets/home.svg';
import { Link } from 'react-router-dom';
import './Home.scss';


function Home() {
  const states=['Aguascalientes','Baja California','Baja California Sur','Campeche','Chiapas','Chihuahua','Coahuila de Zaragoza','Colima','Ciudad de México','Durango','Guanajuato','Guerrero','Hidalgo','Jalisco','Mexico','Michoacan de Ocampo','Morelos','Nayarit','Nuevo Leon','Oaxaca','Puebla','Queretaro de Arteaga','Quintana Roo','San Luis Potosi','Sinaloa','Sonora','Tabasco','Tamaulipas','Tlaxcala','Veracruz-Llave','Yucatan','Zacatecas'];

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
                <div className="states-options">
                  {states.map((name, index) => (
                    <Link className="states-option" to={"/estado/"+name} key={index}> {name}</Link>
                  ))}
                </div>
              </nav>
          </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
