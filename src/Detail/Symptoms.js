import React from "react";
import { Icon, Container } from "../Components";

import ilovehome from "../assets/ilovehome.svg";
import android from "../assets/android.svg";
import web from "../assets/web.svg";
import sms from "../assets/sms.svg";
import apple from "../assets/apple.svg";

const DETAIL_DATA = [ 'app_android', 'sms', 'app_ios', 'prueba_web' ]

export default function Symptoms({ item }) {
  const { app_android, sms, app_ios, prueba_web } = item;
  return (
    <Container>
      <Container direction={"column"} alignItems={"center"}>
        <h2>¿Tienes síntomas?</h2>
        <h4>Hazte la prueba en línea</h4>
        <Container>
          {item.app_android === "no" &&
            item.sms === "no" &&
            item.app_ios === "no" &&
            item.prueba_web === "no" &&
            "No hay información por el momento."}
        </Container>
        <Container>
          {item.prueba_web !== "no" && <Icon image={web} text={"Sitio Web"} />}
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
      </Container>
      <Container className={"movileHide"}>
        <img src={ilovehome} alt="Quédate en casa" />
      </Container>
    </Container>
  );
}
