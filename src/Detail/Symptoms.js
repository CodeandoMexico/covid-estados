import React from "react";
import { Icon, Container } from "../Components";

import ilovehome from "../assets/ilovehome.svg";
import android from "../assets/android.svg";
import web from "../assets/web.svg";
import sms from "../assets/sms.svg";
import apple from "../assets/apple.svg";

const DETAIL_DATA = {
  app_android: {
    icon: android,
    text: "App-and",
  },
  sms: {
    icon: sms,
    text: "Sms",
  },
  app_ios: {
    icon: apple,
    text: "App-ios",
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
          <h2>¿Tienes síntomas?</h2>
          <h4>Haz la prueba en línea</h4>
          {isEmptyDetails && <p>No hay información por el momento.</p>}
          {!isEmptyDetails && (
            <Container direction={"grid"}>
              {Object.keys(DETAIL_DATA).map(
                (k) =>
                  item[k] !== "no" && (
                    <Icon
                      image={DETAIL_DATA[k].icon}
                      text={DETAIL_DATA[k].text}
                    />
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
