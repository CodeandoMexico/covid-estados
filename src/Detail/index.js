import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { getEstate } from "../Selectors";
import Err404 from "../Err404";
import { Container, Counter, Box, LinkSelect, Badge } from "../Components";
import Loader from "../Loader";
import InformationDetail from "./InformationDetail";
import Symptoms from "./Symptoms";
import telephone from "../assets/telephone.svg";
import logo from "../assets/codeandomexico-bco.svg";
import config from "./config";
import "./index.scss";

const Detail = () => {
  const { id } = useParams();
  const { data: estados, load } = useSelector((state) => state.estados);
  const estadoDetail = useSelector((state) => getEstate(state, id));
  const isItem = Object.keys(estadoDetail).length > 0;
  const { estado, telefono } = estadoDetail || {};
  const phones = telefono ? telefono.split(",") : [];

  // TODO: Move in function abstract
  const getVariant = (value, type) => {
    let posibilities = [];
    if (type === "nivel") {
      posibilities = [
        { text: "máximo", value: "red" },
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
        { text: "sin información", value: "gray" }
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
  if (!load && !isItem) {
    return <Route component={Err404} />;
  }
  return load ? (
    <Loader />
  ) : (
    <>
      <Container>
        <Container
          direction={"column"}
          className={"estado"}
        >
          <NavLink className="estado-codeando" to="/"><img src={logo} alt="codeando mexico" /></NavLink>
          <div className="flex">
            <h1 className="estado-title">{estado}</h1>
            <p>¿Te interesa información de otro estado?</p>
            <LinkSelect
              options={estados}
              type="white"
              placeholder="[SELECCIONA]"
            />
          </div>
          <p className="hidden-mobile">Quédate en casa y lávate las manos.</p>
        </Container>

        {/*
          TODO: Move in component
         */}
        <Container direction={"column"} className="pd-1">
          <Box direction={"column"}>
            <Container>
              {config.typeCases.map((value, index) => (
                <Counter
                  title={value.label}
                  value={estadoDetail[value.key]}
                  key={index}
                />
              ))}
            </Container>
              <div className="button-box">
                <a
                  href="https://coronavirus.gob.mx/datos/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Conoce más</button>
                </a>
              </div>
          </Box>
          <Box direction={"column"}>
            <Container className="center">
              <h4>Líneas locales de atención</h4>
            </Container>
            <Container className="phone-container">
              <ul className="decoration">
                {phones.map((phone, index) => (
                  <li key={index}>{phone}</li>
                ))}
              </ul>
              <img
                src={telephone}
                alt="Quédate en casa"
              />
            </Container>
          </Box>
        </Container>

        <Container className="pd-1">
          <Box direction={"column"}>
            <h3>SEMÁFORO</h3>
            <div>
              Nivel de riesgo:
              <Badge
                variant={getVariant(estadoDetail["nivel de riesgo"], "nivel")}
                direction={"column"}
              >
                {estadoDetail["nivel de riesgo"]}
              </Badge>
            </div>
            <div>
              Tendencia:
              <Badge
                variant={getVariant(estadoDetail.tendencia, "tendencia")}
                direction={"column"}
              >
                {estadoDetail.tendencia}
              </Badge>
            </div>
            <p className="mt">{estadoDetail["medidas-01"]}</p>
          </Box>
        </Container>
      </Container>
      <Symptoms item={estadoDetail} />
      <InformationDetail item={estadoDetail} />
      <div className={"content text-center color-primary"}>
        <p>
          *Este es un esfuerzo voluntario, si encuentras información incorrecta o quieres agregar algo, llena este <a href="https://docs.google.com/forms/d/1HhbbSjhkRB9rYA32lnm0b6e5mUQpDk8Eq_Yrl7-MUjI/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer">formulario</a>
        </p>
        <a
          href="https://airtable.com/shrmp4rtdUkGu8BAn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>DESCARGAR DATOS</button>
        </a>
      </div>
    </>
  );
};

export default Detail;
