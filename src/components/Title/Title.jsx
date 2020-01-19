import React from "react";
import { TitleBox, LogoStyled, TitleStyled } from "./styled";
import Logo from "../../images/Logos/SV_SeeThrough_Logo_TeeEdit.png";

const Title = ({ onMobile }) => {
  return (
    <TitleBox>
  <LogoStyled   src={Logo} />
      <TitleStyled variant={onMobile ? "h5" : "h4"} gutterBottom color="inherit">
        Bringing Together What Moves You!
      </TitleStyled>
    </TitleBox>
  );
};

export default Title;
