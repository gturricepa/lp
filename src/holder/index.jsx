import alert from "../assets/alert.svg";
import logo from "../assets/logo.svg";
import eua from "../assets/eua.svg";
import es from "../assets/es.svg";
import pt from "../assets/pt.svg";

import { Content } from "../content";

import * as S from "./styles";
export const Holder = () => {
  return (
    <S.HolderBG>
      <img alt="alert" src={alert} />
      <Content
        title={"Scheduled Maintenance Notice"}
        desc={
          "We are conducting maintenance and updates on our platform to provide you with better services. During this time, some services may be temporarily unavailable."
        }
        bold={"Thank you for your understanding — "}
        soon={"we’ll be back soon"}
        country={eua}
      />

      <Content
        title={"Aviso de Mantenimiento Programado"}
        desc={
          "Estamos realizando tareas de mantenimiento y actualización en nuestra plataforma para brindarte un mejor servicio. Durante este proceso, algunos servicios estarán temporalmente fuera de línea."
        }
        bold={"Agradecemos tu comprensión"}
        soon={"y estaremos de vuelta muy pronto."}
        country={es}
      />
      <Content
        title={"Aviso de Manutenção"}
        desc={
          "Estamos realizando uma manutenção programada em nosso sistema para melhorias e atualizações. Durante esse período, alguns serviços poderão ficar temporariamente indisponíveis."
        }
        bold={" Agradecemos pela compreensão,"}
        soon={" em breve estaremos de volta."}
        country={pt}
      />

      <img alt="logo" src={logo} style={{ width: "180px", height: "72px" }} />
    </S.HolderBG>
  );
};
