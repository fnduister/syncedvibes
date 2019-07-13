import React from "react";
import {
  Container,
  ButtonStyled,
  InvertColorsStyled,
  SettingsStyled,
  DividerStyled,
  HowToRegStyled
} from "./styled";

const AdminButtons = () => {
  return (
    <Container>
      <ButtonStyled>
        <InvertColorsStyled />
      </ButtonStyled>
      <DividerStyled/>
      <ButtonStyled>
        <HowToRegStyled />
      </ButtonStyled>
      <DividerStyled/>
      <ButtonStyled>
        <SettingsStyled />
      </ButtonStyled>
    </Container>
  );
};

export default AdminButtons;
