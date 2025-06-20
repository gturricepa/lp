// src/components/Holder.jsx
import styled from "styled-components";
import bg from "../assets/bg.png"; // caminho para sua imagem

export const HolderBG = styled.div`
  max-width: 100%; /* ou largura exata conforme o Figma, ex: 1440px */
  min-height: 100vh; /* ou altura conforme o Figma */
  background-image: url(${bg});
  background-size: cover; /* ou 'contain', depende do design */
  background-position: center;
  background-repeat: no-repeat;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 1600px) {
  }
`;

export const Alert = styled.img`
  @media (max-width: 1600px) {
    margin-top: 1rem;

    width: 90px;
  }
`;
export const Logo = styled.img`
  @media (max-width: 1600px) {
    width: 150px;
    margin-bottom: 1rem;
  }
`;
