import React from "react";
import { Route } from "react-router-dom";
import Err404 from "../Err404";

import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import './index.scss';

import ilovehome from "../assets/ilovehome.svg";
import telephone from "../assets/telephone.svg";
import telephone2 from "../assets/telephone2.svg";

import android from "../assets/android.svg";
import web from "../assets/web.svg";
import sms from "../assets/sms.svg";
import apple from "../assets/apple.svg";
import hospital from "../assets/hospital.svg";
import docs from "../assets/docs.svg";
import whatsapp from "../assets/whatsapp.svg";
import cat from "../assets/cat.svg";

import { Icon, Container, Counter, Box, LinkTo, Badge } from "../Components";

function Detail({ estados }) {
  const { id } = useParams();
  const item = estados[id] || false;

  let violencia_genero_en_linea = [];
  let violencia_genero_telefono = [];
  let telefono = [];
  if (item) {
    if (
      item.violencia_genero_en_linea &&
      item.violencia_genero_en_linea !== "no"
    ) {
      // item.violencia_genero_en_linea debe ser:
      // key value,key2 value2..
      violencia_genero_en_linea = item.violencia_genero_en_linea
        .split(",")
        .map((v) => v.split(" "));
    }
    if (
      item.violencia_genero_telefono &&
      item.violencia_genero_telefono !== "no"
    ) {
      violencia_genero_telefono = item.violencia_genero_telefono.split(",");
    }

    if (item.telefono) {
      telefono = item.telefono.split(",");
    }
  }

  const getVariant = (value, type) => {
    let posibilities = []
    if (type === 'nivel') {
      posibilities = [
        { text: "maximo", value: "red" },
        { text: "alto", value: "orange" },
        { text: "medio", value: "yellow" },
        { text: "bajo", value: "green" },
      ]
    } else if (type === "tendencia") {
      posibilities = [
        { text: "incremento", value: "red" },
        { text: "estable", value: "orange" },
        { text: "moderado", value: "yellow" },
        { text: "franco", value: "green" },
      ]
    }
    if (posibilities.length === 0) {
      return 'red'
    }
    for (let i in posibilities) {
      if (value.indexOf(posibilities[i].text) !== -1) {
        return posibilities[i].value
      }
    }
  }

  return item ? (
    <React.Fragment>
      <Container>
        <Container
          direction={"column"}
          className={"title"}
          alignItems={"center"}
        >
          <h1>{item.estado}</h1>
          ¿Te interesa información de otro estado?
          <button className="states-action" type="button">
            [SELECCIONA]
          </button>
          Quédate en casa y lávate las manos.
        </Container>

        <Container direction={"column"}>
          <Box direction={"column"}>
            <Container>
              <Counter title={"Casos confirmados"} number={140} />
              <Counter title={"Casos confirmados"} number={140} />
              <Counter title={"Casos confirmados"} number={140} />
            </Container>
            <Container>
              <Container alignItems={"center"}>
                <button>Conóce más</button>
              </Container>
            </Container>
          </Box>
          <Box direction={"column"}>
            <Container>
              <h4>L&iacute;neas locales de atenci&oacute;n</h4>
            </Container>
            <Container>
              <Container>
                <ul className="decoration">
                  {telefono.map((v, k) => (
                    <li key={k}>{v.trim()}</li>
                  ))}
                </ul>
              </Container>
              <Container alignItems={"end"}>
                <img src={telephone} alt="Quédate en casa" className="margin-left" />
              </Container>
            </Container>
          </Box>
        </Container>

        <Container className="text-primary no-margin">
          <Box direction={"column"}>
            <h3>MEDIDAS OFICIALES</h3>
            <h5>SEMÁFORO</h5>
            <p direction={"column"}>
              Nivel de riesgo: 
                <Badge 
                  variant={getVariant(item["nivel de riesgo"], "nivel")} 
                  direction={"column"}>
                    {item["nivel de riesgo"]}
                </Badge>
            </p>
            <p direction={"column"}>
              Tendencia:
                <Badge 
                  variant={getVariant(item.tendencia, "tendencia")} 
                  direction={"column"}>
                    {item.tendencia}
                </Badge>
            </p>
            <p>
            {item["medidas-01"]}
              </p>
          </Box>
        </Container>
      </Container>

      <Container>
        <Container direction={"column"} alignItems={"center"}>
          <h2>¿Tienes síntomas?</h2>
          <h4>Hazte la prueba en línea</h4>
          <Container>
            {( item.app_android === "no" &&
              item.sms === "no" &&
              item.app_ios === "no" &&
              item.prueba_web === "no" ) ?
              "No hay información por el momento."
              :<>
              <Container>
                {item.prueba_web !== "no" && (
                  <Icon image={web} text={"Sitio Web"} />
                )}
                {item.app_ios !== "no" && (
                  <Icon image={apple} text={"App-ios"} link={item.app_ios} />
                )}
              </Container>
              <Container>
                {item.app_android !== "no" && (
                  <Icon image={android} text={"App-and"} link={item.app_android} />
                )}
                {item.sms !== "no" && (
                  <Icon image={sms} text={"Sms"} link={item.sms} />
                )}
              </Container>
              </>
            }
          </Container>
        </Container>
        <Container className={"movileHide"}>
          <img src={ilovehome} alt="Quédate en casa" />
        </Container>
      </Container>

      <Container direction={"column"} className={"bgBlue"}>
        <Container className={"mobileColumn"}>
          <Container direction={"column"} alignItems={"center"}>
            <h1>Información relevante</h1>
            <img
              src={cat}
              alt={"Informacion relevante"}
              className="movileHide"
            />
          </Container>
          <Container direction={"column"}>
            <Box direction={"column"}>
              <Container>
                <h3>Líneas de atención a violencia de género</h3>
              </Container>
              <Container>
                <Container direction={"column"}>
                  {violencia_genero_telefono.length > 0 && (
                    <Container>
                      Teléfonos: {" "}
                      {/* <div>
                        {violencia_genero_telefono.map((v, k) => (
                          <div key={k}>{v}</div>
                        ))}
                      </div> */}
                      <ul className="decoration2">
                        {violencia_genero_telefono.map((v, k) => (
                          <div key={k}>{v}</div>
                        ))}
                      </ul>
                    </Container>
                  )}
                  {violencia_genero_en_linea.length > 0 && (
                    <Container>
                      En línea: {" "}
                      {/* <div>
                        {violencia_genero_en_linea.map((v, k) => (
                          <LinkTo key={k} v={v} />
                        ))}
                      </div> */}
                      <ul className="decoration2">
                        {violencia_genero_en_linea.map((v, k) => (
                          <LinkTo key={k} v={v} />
                        ))}
                      </ul>
                    </Container>
                  )}
                </Container>
                <img src={telephone2} alt="Teléfono" />
              </Container>
            </Box>
            <Container>
              {item.programas !== "no" && (
                <Icon image={docs} text={"Programas"} link={item.programas} />
              )}
              {item.whatsapp !== "no" && (
                <Icon image={whatsapp} text={"whatsapp"} link={item.whatsapp} />
              )}
              {item.centros_salud !== "no" && (
                <Icon
                  image={hospital}
                  text={"Centros de salud"}
                  link={item.centros_salud}
                />
              )}
            </Container>
          </Container>
        </Container>
        <Container alignItems={"center"}>
          <h4>Para más información: </h4>
          <a
            href={item.web}
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>SITIO WEB OFICIAL</button>
          </a>
        </Container>
      </Container>

      <Container direction={"column"} alignItems={"center"}>
        <p>
          *Este es un esfuerzo voluntario, si encuentras información incorrecta
          o quieres agregar algo, llena este formulario
        </p>
        <a
          href="https://airtable.com/shrmp4rtdUkGu8BAn"
          className="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Descargar datos</button>
        </a>
      </Container>
    </React.Fragment>
  ) : (
    <Route component={Err404} />
  );
}

const mapStateToProps = (state) => ({
  estados: state.estadosObj,
});
export default connect(mapStateToProps)(Detail);
