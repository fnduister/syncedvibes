import React from "react";
import { BottomStyled } from "./styled";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { theme } from "../../GlobalStyle";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar } from "@material-ui/core";
import { ReactComponent as SyncedVibesIcon } from '../../images/syncedVibesIcon.svg';

const Footer = () => {
  return (
      <BottomStyled
        container
        spacing={16}
        alignItems="center"
        direction="row"
        justify="center"
        background={theme.palette.primary[300]}
      >
        <Grid
          item
          sm={3}
        >
          <Typography variant="h5" color="secondary">
            Recent Posts
          </Typography>
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
        </Grid>
        <Grid
          item
          sm={2}
        >
          <Typography variant="h5" color="secondary">
            Archives
          </Typography>
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
        </Grid>
        <Grid
          item
          sm={3}
        >
          <Typography variant="h5" color="secondary">
            Recent comment
          </Typography>
          <Typography variant="caption" color="inherit">
            Buggy B – Losi… on Buggy B – Who Is This…
          </Typography>
          <Typography variant="caption" color="inherit">
            Flatbush Zombies… on Flatbush Zombies – New W…
          </Typography>
          <Typography variant="caption" color="inherit">
            G Herbo – Bonj… on G Herbo & Southside Presen…
          </Typography>
          <Typography variant="caption" color="inherit">
            Curren$y – 300… on Curren$y Presents ‘Fire…
          </Typography>
        </Grid>
      </BottomStyled>
  );
};

export default Footer;
