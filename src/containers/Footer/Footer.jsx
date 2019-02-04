import React from "react";
import { BottomBox, BottomStyled, Title } from "./styled";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { theme } from "../../GlobalStyle";

const Footer = () => {
  return (
    <BottomStyled
      container
      alignItems="flex-start"
      direction="row"
      justify="center"
      background={theme.palette.primary[300]}
    >
      <Grid item md={3}>
        <BottomBox>
          <Title variant="h5" color="secondary">
            Recent Posts
          </Title>
          <Typography variant="caption" color="inherit">
            Kodak Black – Close To The Grave
          </Typography>
          <Typography variant="caption" color="inherit">
            OMB Peezy – Ms. Lois House
          </Typography>
          <Typography variant="caption" color="inherit">
            Warm Brew Feat. Dom Kennedy – Full Effect
          </Typography>
          <Typography variant="caption" color="inherit">
            Iamsu! – Freestyle
          </Typography>
        </BottomBox>
      </Grid>
      <Grid item md={3}>
        <BottomBox archive="true">
          <Title variant="h5" color="secondary">
            Archives
          </Title>
          <Typography variant="caption" color="inherit">
            December 2018
          </Typography>
          <Typography variant="caption" color="inherit">
            November 2018
          </Typography>
          <Typography variant="caption" color="inherit">
            October 2018
          </Typography>
          <Typography variant="caption" color="inherit">
            September 2018
          </Typography>
        </BottomBox>
      </Grid>
      <Grid item md={3}>
        <BottomBox>
          <Title variant="h5" color="secondary">
            Recent comment
          </Title>
          <Typography variant="caption" color="inherit">
            Buggy B – Losi… on Buggy B – Who Is This Home
          </Typography>
          <Typography variant="caption" color="inherit">
            Flatbush Zombies… on Flatbush Zombies – New Baby
          </Typography>
          <Typography variant="caption" color="inherit">
            G Herbo – Bonj… on G Herbo & Southside Presente
          </Typography>
          <Typography variant="caption" color="inherit">
            Curren$y – 300… on Curren$y Presents ‘FireBase
          </Typography>
        </BottomBox>
      </Grid>
    </BottomStyled>
  );
};

export default Footer;
