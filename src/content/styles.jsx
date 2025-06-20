import styled from "styled-components";

// Layout principal: lado a lado
export const ContentLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 32px;

  @media (max-width: 1600px) {
    align-items: center;
    flex-direction: row;
    align-items: flex-start;
    gap: 24px;
  }
`;

// Parte esquerda: imagem
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 61px;
    height: 61px;

    @media (max-width: 1600px) {
      width: 52px;
      height: 52px;
    }
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

    @media (max-width: 1600px) {
      font-size: 22px;
    }
  }

  p {
    font-size: 18px;
    margin: 0 0 16px 0;
    width: 847px;

    @media (max-width: 1600px) {
      font-size: 15px;
    }
  }

  li {
    font-size: 18px;

    @media (max-width: 1600px) {
      font-size: 15px;
    }
  }
`;
