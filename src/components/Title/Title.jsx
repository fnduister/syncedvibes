import React from "react";
import Typography from "@material-ui/core/Typography";
import { TitleBox } from "./styled";

const Title = ({ onMobile }) => {
  return (
    <TitleBox>
      <Typography variant={onMobile ? "h2" : "h1"} gutterBottom color="inherit">
        SyncedVibes
      </Typography>
      <Typography variant={onMobile ? "h5" : "h4"} gutterBottom color="inherit">
        Bringing Together What Moves You!
      </Typography>
    </TitleBox>
  );
};

export default Title;
