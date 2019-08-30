import React from "react";
import Button from "../Button/Button";
import { Container, ButtonStyled } from "./styled";

const CustomBlockControls = ({ onAddImage }) => {
  return (
    <Container className="RichEditor-controls">
      <ButtonStyled onClick={onAddImage}>Video</ButtonStyled>
      <ButtonStyled>Image</ButtonStyled>
    </Container>
  );
};

export default CustomBlockControls;
