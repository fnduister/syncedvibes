import React from "react";
import { Link } from "react-router-dom";
import { Container, ButtonStyled, IconStyled } from "./styled";

const AdminButtons = () => {
  return (
    <Container>
      <ButtonStyled component={Link} to="/manageUsers">
        <IconStyled>how_to_reg</IconStyled>
      </ButtonStyled>
      <ButtonStyled component={Link} to="/manageUsers">
        <IconStyled>settings</IconStyled>
      </ButtonStyled>
      <ButtonStyled component={Link} to="/addArticle">
        <IconStyled>queue</IconStyled>
      </ButtonStyled>
    </Container>
  );
};

export default AdminButtons;
