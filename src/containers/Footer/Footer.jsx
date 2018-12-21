import React from "react";
import { BottomStyled } from "./styled";
import Typography from "@material-ui/core/Typography";

const Footer = () => {
  return (
    <BottomStyled container spacing={16}>
      <Typography variant="body1">Footer</Typography>
    </BottomStyled>
  );
};

export default Footer;
