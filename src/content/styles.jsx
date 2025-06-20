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
  @media (max-width: 950px) {
    justify-content: center;
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
    @media (max-width: 950px) {
      width: 32px;
      height: 32px;
      margin-left: 1rem;
    }
  }
`;

// Parte direita: textos
export const Holder = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  font-family: "Inter", sans-serif;
  @media (max-width: 950px) {
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 27px;
    margin: 0 0 16px 0;

    @media (max-width: 1600px) {
      font-size: 22px;
    }
    @media (max-width: 950px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 18px;
    margin: 0 0 16px 0;
    width: 847px;

    @media (max-width: 1600px) {
      font-size: 15px;
    }
    @media (max-width: 950px) {
      width: 90%;
      font-size: 12px;
      margin-right: 1rem;
    }
  }

  li {
    font-size: 18px;

    @media (max-width: 1600px) {
      font-size: 15px;
      @media (max-width: 950px) {
        font-size: 12px;
        width: 90%;
      }
    }
  }
`;

export const Line = styled.img`
  width: 739px;
  height: 2px;
  margin-top: 26px;
  margin-bottom: 26px;
  @media (max-width: 950px) {
    width: 50%;
    display: flex;
    justify-self: center;
    align-self: center;
    height: 2px;
    margin-right: 3rem;
  }
`;
