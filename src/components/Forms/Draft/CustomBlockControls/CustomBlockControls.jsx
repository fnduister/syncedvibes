import React from "react";
import Button from "../Button/Button";
import { Container, ButtonStyled } from "./styled";

const CustomBlockControls = ({ onAddImage, onHyperLink }) => {
  return (
    <Container className="RichEditor-controls">
      <ButtonStyled onClick={onAddImage}>Video</ButtonStyled>
      <ButtonStyled onClick={onAddImage}>Image</ButtonStyled>
      <ButtonStyled onClick={onHyperLink}>HyperLink</ButtonStyled>
    </Container>
  );
};

export default CustomBlockControls;
