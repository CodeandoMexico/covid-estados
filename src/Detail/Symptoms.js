import React from "react";
import { Icon, Container } from "../Components";

import ilovehome from "../assets/ilovehome.svg";
import android from "../assets/android.svg";
import web from "../assets/web.svg";
import sms from "../assets/sms.svg";
import apple from "../assets/apple.svg";

const DETAIL_DATA = {
  "tiene-prueba-and": {
    icon: android,
    text: "App Android",
  },
  sms: {
    icon: sms,
    text: "SMS",
  },
  "tiene-prueba-ios": {
    icon: apple,
    text: "App iOS",
  },
  prueba_web: {
    icon: web,
    text: "Sitio Web",
  },
};

export default function Symptoms({ item }) {
  const isEmptyDetails =
    Object.keys(DETAIL_DATA).filter((k) => item[k] !== "no").length === 0;
  return (
    <Container className="jumbotron color-primary">
      <Container direction={"column"} alignItems={"center"}>
        <Container direction={"column"}>
          <h2 className="title">¿Tienes síntomas?</h2>
          <h4 className="subtitle">Haz la prueba en línea</h4>
          {isEmptyDetails && <p>Tu estado no tiene pruebas en línea, si tienes síntomas o quieres más información puedes llamar a las líneas locales de atención.</p>}
          {!isEmptyDetails && (
            <Container direction={"grid"}>
              {Object.keys(DETAIL_DATA).map(
                (k) =>
                  item[k] !== "no" && (
                    <div key={k}>
                      <Icon
                        image={DETAIL_DATA[k].icon}
                        text={DETAIL_DATA[k].text}
                        link={DETAIL_DATA[k].text !== "SMS" && item[k]}
                      />
                      {DETAIL_DATA[k].text === "SMS" && item[k]}
                    </div>
                  )
              )}
            </Container>
          )}
        </Container>
      </Container>
      <Container className={"movileHide"}>
        <img src={ilovehome} alt="Quédate en casa" />
      </Container>
    </Container>
  );
}
