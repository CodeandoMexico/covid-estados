import React, { Fragment } from "react";
import { Container, Box, Icon, LinkTo } from "../Components";
import "./informationDetail.scss";

import hospital from "../assets/hospital.svg";
import docs from "../assets/docs.svg";
import whatsapp from "../assets/whatsapp.svg";
import android from "../assets/android.svg";
import apple from "../assets/apple.svg";
import cat from "../assets/cat.svg";
import telephone2 from "../assets/telephone2.svg";
import web from "../assets/web.svg";

export default function InformationDetail({ item }) {
  
  // TODO: Refactor logic in compoent
  // add reselect change structure
  let violencia_genero_en_linea = [];
  let violencia_genero_telefono = [];
  let info_relevante_otros = [];
  let infoOtrosIsLink = null;

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

    if (item.otros !== "no") {
      info_relevante_otros = item.otros.split(",").map((v) => v.split(": "));
      if (info_relevante_otros.length > 0) {
        info_relevante_otros[0][1].substring(0, 5) === "https"
          ? (infoOtrosIsLink = true)
          : (infoOtrosIsLink = false);
      }
    }
  }

  const generateLinkToTel = (tel) => {
    return `tel:${tel.replace(/\D/g,'')}`
  } 

  const infoHasWhatsapp = (title) => title.toUpperCase().includes("WHATSAPP");

  const infoDeTarjetas = () => {
    return (
      item.programas !== "no" ||
      item.app_android !== "no" ||
      item.app_ios !== "no" ||
      item.whatsapp !== "no" ||
      item.centros_salud !== "no"
    );
  };

  return (
    <Container direction={"column"} className={"bgBlue"}>
      <Container className={"mobileColumn pd-1"}>
        <Container direction={"column"} alignItems={"center"}>
          <Container direction={"row"} alignItems={"center"}>
            <h2 className="info-relevante">Información relevante</h2>
          </Container>
          <img src={cat} alt={"Información relevante"} />
        </Container>

        <Container direction={"column"}>
          <Box direction={"column"} className="box-linea-violencia">

            <h3 className="titulo-lineas-violencia">Líneas de atención a violencia de género</h3>

            <Container>
              <Container direction={"column"} className="iallevamediosita">
                {violencia_genero_telefono.length > 0 && (
                  <Container>
                  <div className="atenciones">
                    <div>
                      <h5 className="atencion-text">Atención vía telefónica {" "}</h5>
                    </div>
                      {violencia_genero_telefono.map((v, k) => (
                        <a href={generateLinkToTel(v)} key={k}>
                          <div key={k}>{v}</div>
                        </a>
                      ))}
                    </div>
                  </Container>
                )}

                {violencia_genero_en_linea.length > 0 && (

                  <Container>
                    <div className="atenciones">
                      <div>
                        <h5 className="atencion-text">Atención en línea {" "}</h5>
                      </div>
                        {violencia_genero_en_linea.map((v, k) => (
                          <LinkTo key={k} v={v} className="link-atenciones"/>
                        ))}
                    </div>
                  </Container>
                )}
              </Container>
              <img src={telephone2} alt="Teléfono" />
            </Container>
          </Box>

          {infoDeTarjetas() && (
          <Container>
            {item.programas !== "no" && (
              <Icon image={docs} text={"Programas"} link={item.programas} />
            )}
            {item.app_android !== "no" && (
              <Icon
                image={android}
                text={"App Android"}
                link={item.app_android}
              />
            )}
            {item.app_ios !== "no" && (
              <Icon image={apple} text={"App iOS"} link={item.app_ios} />
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
          )}

          <Container>
            {info_relevante_otros.length > 0 &&
              info_relevante_otros.map((info, k) => (
                <Fragment key={k}>
                  {infoOtrosIsLink && !infoHasWhatsapp(info[0]) && (
                    <Box direction={"column"} className='box-linea-violencia'>
                      <Container>
                        <Container
                          direction={"column"}
                          className='iallevamediosita'
                        >
                          <Container>
                            <div className='atenciones'>
                              <div>
                                <h5 className='atencion-text'>{info[0]}</h5>
                              </div>
                              <a
                                href={info[1]}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='link-atenciones'
                              >
                                {info[1]}
                              </a>
                            </div>
                          </Container>
                        </Container>
                        <img src={web} alt='Web' />
                      </Container>
                    </Box>
                  )}
                  {infoOtrosIsLink && infoHasWhatsapp(info[0]) && (
                    <Icon image={whatsapp} text={info[0]} link={info[1]} />
                  )} 
                  {!infoOtrosIsLink && !infoHasWhatsapp(info[0]) && (
                    <Icon
                      image={telephone2}
                      text={info[0]}
                      link={generateLinkToTel(info[1])}
                    />
                  )}
                  {!infoOtrosIsLink && infoHasWhatsapp(info[0]) && (
                    <Icon
                      image={whatsapp}
                      text={info[0]}
                      link={`https://api.whatsapp.com/send?phone=${info[1]}`}
                    />
                  )}
                </Fragment>
              ))}
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
