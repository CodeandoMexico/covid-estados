import React from "react";
import { Container, Box, Icon, LinkTo } from "../Components";

import hospital from "../assets/hospital.svg";
import docs from "../assets/docs.svg";
import whatsapp from "../assets/whatsapp.svg";
import cat from "../assets/cat.svg";
import telephone2 from "../assets/telephone2.svg";

export default function InformationDetail({ item }) {

  // TODO: Refactor logic in compoent 
  // add reselect change structure 
  let violencia_genero_en_linea = [];
  let violencia_genero_telefono = [];
  if (item) {
    if (
      item.violencia_genero_en_linea &&
      item.violencia_genero_en_linea !== "no"
    ) {
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

  }
  return (
    <Container direction={"column"} className={"bgBlue"}>
      <Container className={"mobileColumn pd-1"}>
        <Container direction={"column"} alignItems={"center"}>
          <h1>Información relevante</h1>
          <img src={cat} alt={"Información relevante"} className="movileHide" />
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
                    Teléfonos:{" "}
                    <div>
                      {violencia_genero_telefono.map((v, k) => (
                        <div key={k}>{v}</div>
                      ))}
                    </div>
                  </Container>
                )}
                {violencia_genero_en_linea.length > 0 && (
                  <Container>
                    En línea:{" "}
                    <div>
                      {violencia_genero_en_linea.map((v, k) => (
                        <LinkTo key={k} v={v} />
                      ))}
                    </div>
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

      <Container alignItems={"center"} className="pd-1">
        <h4>Para más información: </h4>
        <div>
          <a
            href={item.web}
            className="button"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: "1rem" }}
          >
            <button>SITIO WEB OFICIAL</button>
          </a>
        </div>
      </Container>
    </Container>
  );
}
