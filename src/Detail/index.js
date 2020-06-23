import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./index.scss";
import Err404 from "../Err404";
import { Container, Counter, Box, LinkSelect } from "../Components";

import InformationDetail from "./InformationDetail";
import Symptoms from "./Symptoms";
import telephone from "../assets/telephone.svg";
import config from "./config";

const Detail = () => {
  const { id } = useParams();
  const estados = useSelector((state) => state.estados.data);

  const item = estados.find((s) => s.id === id) || {};
  const isItem = Object.keys(item).length > 0;
  const { estado, telefono } = item || {};
  const phones = telefono ? telefono.split(",") : [];

  if (!isItem) {
    return <Route component={Err404} />;
  }
  console.log(item);
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
          <Box>Medidas oficiales</Box>
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
};

export default Detail;
