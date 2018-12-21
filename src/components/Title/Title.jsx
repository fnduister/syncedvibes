import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { theme } from "../../GlobalStyle";
import { TitleBox } from "./styled";

const Title = () => {
  console.log({theme});
  return (
    <TitleBox>
      <Typography variant="h1" gutterBottom color="inherit">
        SyncedVibes
      </Typography>
      <Typography
        variant="h4"
        gutterBottom
        color="inherit"
      >
        What do you want!
      </Typography>
    </TitleBox>
  );
};

export default Title;
