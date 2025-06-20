import styled from "styled-components";

// Layout principal: lado a lado
export const ContentLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 32px; /* Espaçamento entre a imagem e os textos */
`;

// Parte esquerda: imagem
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 61px; /* ajuste conforme o Figma */
    height: 61px;
  }
`;

// Parte direita: textos
export const Holder = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  font-family: "Inter", sans-serif;

  h1 {
    font-size: 27px;
    margin: 0 0 16px 0;
    padding: 0;
  }

  p {
    font-size: 18px;
    margin: 0 0 16px 0;
    padding: 0;
    width: 847px;
  }

  li {
    font-size: 18px;
    margin: 0;
    padding: 0;
  }
`;
