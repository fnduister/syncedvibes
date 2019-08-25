import React from "react";
import Typography from "@material-ui/core/Typography";
import { TitleBox, LogoStyled } from "./styled";
import Logo from "../../images/Logos/SV_SeeThrough_Logo_TeeEdit.png";

const Title = ({ onMobile }) => {
  return (
    <TitleBox>
  <LogoStyled   src={Logo} />
      <Typography variant={onMobile ? "h5" : "h4"} gutterBottom color="inherit">
        Bringing Together What Moves You!
      </Typography>
    </TitleBox>
  );
};

export default Title;
