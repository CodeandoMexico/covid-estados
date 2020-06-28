import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getEstate } from "../Selectors";
import Err404 from "../Err404";
import { Container, Counter, Box, LinkSelect, Badge } from "../Components";
import Loader from "../Loader";
import InformationDetail from "./InformationDetail";
import Symptoms from "./Symptoms";
import telephone from "../assets/telephone.svg";
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
          className={"title pd-1"}
          alignItems={"center"}
        >
          <h1>{estado}</h1>
          <div style={{ margin: 10 }}>
            <div>
              <p>¿Te interesa información de otro estado?</p>
            </div>
            <LinkSelect
              options={estados}
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
              {config.typeCases.map((value, index) => (
                <Counter
                  title={value.label}
                  value={estadoDetail[value.key]}
                  key={index}
                />
              ))}
            </Container>
            <Container alignItems={"center"} className="pd-1">
              <button>Conoce más</button>
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

        <Container className="pd-1">
          <Box direction={"column"}>
            <h3>MEDIDAS OFICIALES</h3>
            <h5>SEMÁFORO</h5>
            <p direction={"column"}>
              Nivel de riesgo:
              <Badge
                variant={getVariant(estadoDetail["nivel de riesgo"], "nivel")}
                direction={"column"}
              >
                {estadoDetail["nivel de riesgo"]}
              </Badge>
            </p>
            <p direction={"column"}>
              Tendencia:
              <Badge
                variant={getVariant(estadoDetail.tendencia, "tendencia")}
                direction={"column"}
              >
                {estadoDetail.tendencia}
              </Badge>
            </p>
            <p>{estadoDetail["medidas-01"]}</p>
          </Box>
        </Container>
      </Container>
      <Symptoms item={estadoDetail} />
      <InformationDetail item={estadoDetail} />
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
};

export default Detail;
