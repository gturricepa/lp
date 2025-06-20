import * as S from "./styles";
import line from "../assets/line.svg";

export const Content = ({ title, desc, bold, soon, country }) => {
  return (
    <S.ContentLayout>
      <S.Header>
        <img src={country} alt="flag" />
      </S.Header>

      <S.Holder>
        <h1>{title}</h1>
        <p>{desc}</p>
        <li>
          <b>{bold}</b> {soon}
        </li>

        <S.Line src={line} alt="line"></S.Line>
      </S.Holder>
    </S.ContentLayout>
  );
};
