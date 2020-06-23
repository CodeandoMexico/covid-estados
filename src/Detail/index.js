import React from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import "./index.scss";
import Err404 from "../Err404";
import { Container, Counter, Box, LinkSelect, Badge } from "../Components";

import InformationDetail from "./InformationDetail";
import Symptoms from "./Symptoms";
import telephone from "../assets/telephone.svg";
import config from "./config";

function Detail({ estados = [] }) {
  const { id } = useParams();
  let listStates = estados.map((s) => {
    return {
      option: s.fields.estado,
      url: `/estado/${s.id}`,
      id: s.id,
    };
  });
  const item = estados.find((s) => s.id === id) || {};
  const isItem = Object.keys(item).length > 0;
  const { estado, telefono } = item.fields || {};
  const phones = telefono ? telefono.split(",") : [];


  // TODO: Move in function abstract
  const getVariant = (value, type) => {
    let posibilities = [];
    if (type === "nivel") {
      posibilities = [
        { text: "maximo", value: "red" },
        { text: "alto", value: "orange" },
        { text: "medio", value: "yellow" },
        { text: "bajo", value: "green" },
      ];
    } else if (type === "tendencia") {
      posibilities = [
        { text: "incremento", value: "red" },
        { text: "estable", value: "orange" },
        { text: "moderado", value: "yellow" },
        { text: "franco", value: "green" },
      ];
    }
    if (posibilities.length === 0) {
      return "red";
    }
    for (let i in posibilities) {
      if (value.indexOf(posibilities[i].text) !== -1) {
        return posibilities[i].value;
      }
    }
  };
  if (!isItem) {
    return <Route component={Err404} />;
  }

  return (
    <>
      <Container>
        <Container
          direction={"column"}
          className={"title pd-1"}
          alignItems={"center"}
        >
          <h1>{estado}</h1>
          <div style={{ margin: 10 }}>
            <div>
              <p>¿Te interesa información de otro estado?</p>
            </div>
            <LinkSelect
              options={listStates}
              type="white"
              placeholder="[SELECCIONA]"
            />
            <div style={{ marginTop: 80 }}>
              <p>Quédate en casa y lávate las manos.</p>
            </div>
          </div>
        </Container>

        {/* 
          TODO: Move in component
         */}
        <Container direction={"column"} className="pd-1">
          <Box direction={"column"}>
            <Container>
              {config.typeCases.map((type, index) => (
                <Counter title={type.label} value={type.value} key={index} />
              ))}
            </Container>
            <Container alignItems={"center"} className="pd-1">
              <button>Conóce más</button>
            </Container>
          </Box>
          <Box direction={"column"}>
            <Container>
              <h4>Líneas locales de atención</h4>
            </Container>
            <Container>
              <ul className="decoration">
                {phones.map((phone, index) => (
                  <li key={index}>{phone}</li>
                ))}
              </ul>
              <img
                src={telephone}
                alt="Quédate en casa"
                className="margin-left"
              />
            </Container>
          </Box>
        </Container>

        <Container>
          <Box direction={"column"}>
            <h3>MEDIDAS OFICIALES</h3>
            <h5>SEMÁFORO</h5>
            <p direction={"column"}>
              Nivel de riesgo:
              <Badge
                variant={getVariant(item.fields["nivel de riesgo"], "nivel")}
                direction={"column"}
              >
                {item.fields["nivel de riesgo"]}
              </Badge>
            </p>
            <p direction={"column"}>
              Tendencia:
              <Badge
                variant={getVariant(item.fields.tendencia, "tendencia")}
                direction={"column"}
              >
                {item.fields.tendencia}
              </Badge>
            </p>
            <p>{item.fields["medidas-01"]}</p>
          </Box>
        </Container>
      </Container>
      <Symptoms item={item} />
      <InformationDetail item={item} />
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
    </>
  );
}

const mapStateToProps = (state) => ({
  estados: state.estadosArr,
});
export default connect(mapStateToProps)(Detail);
