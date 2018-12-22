import React from "react";
import { BottomStyled } from "./styled";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar } from "@material-ui/core";
import { ReactComponent as SyncedVibesIcon } from '../../images/syncedVibesIcon.svg';

const Footer = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
        <IconButton color="secondary" aria-label="Open drawer">
            <SyncedVibesIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <BottomStyled
        container
        spacing={16}
        alignItems="center"
        direction="row"
        justify="center"
      >
        <Grid
          item
          spacing={16}
          sm={3}
          alignItems="center"
          direction="row"
          justify="center"
        >
          <Typography variant="h4" color="secondary">
            Recent Posts
          </Typography>
          <Typography variant="body1" color="inherit">
            Kodak Black – Close To The Grave
          </Typography>
          <Typography variant="body1" color="inherit">
            OMB Peezy – Ms. Lois House
          </Typography>
          <Typography variant="body1" color="inherit">
            Warm Brew Feat. Dom Kennedy – Full Effect
          </Typography>
          <Typography variant="body1" color="inherit">
            Iamsu! – Freestyle
          </Typography>
        </Grid>
        <Grid
          item
          spacing={2}
          sm={2}
          alignItems="center"
          direction="row"
          justify="center"
        >
          <Typography variant="h4" color="secondary">
            Archives
          </Typography>
          <Typography variant="body1" color="inherit">
            December 2018
          </Typography>
          <Typography variant="body1" color="inherit">
            November 2018
          </Typography>
          <Typography variant="body1" color="inherit">
            October 2018
          </Typography>
          <Typography variant="body1" color="inherit">
            September 2018
          </Typography>
        </Grid>
        <Grid
          item
          spacing={16}
          sm={3}
          alignItems="center"
          direction="column"
          justify="center"
        >
          <Typography variant="h4" color="secondary">
            Recent comment
          </Typography>
          <Typography variant="body1" color="inherit">
            Buggy B – Losi… on Buggy B – Who Is This…
          </Typography>
          <Typography variant="body1" color="inherit">
            Flatbush Zombies… on Flatbush Zombies – New W…
          </Typography>
          <Typography variant="body1" color="inherit">
            G Herbo – Bonj… on G Herbo & Southside Presen…
          </Typography>
          <Typography variant="body1" color="inherit">
            Curren$y – 300… on Curren$y Presents ‘Fire…
          </Typography>
        </Grid>
      </BottomStyled>
    </div>
  );
};

export default Footer;
