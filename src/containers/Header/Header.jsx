import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import purple from "@material-ui/core/colors/purple";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import { Background, BottomLine, AppBarStyled } from "./styled";

const Header = () => (
  <Background>
    <AppBarStyled position="static">
      <Toolbar>
        <IconButton color='secondary' aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography color='secondary' variant="h6" align="justify">
          Menu
        </Typography>
      </Toolbar>
    </AppBarStyled>
    <BottomLine />
  </Background>
);
export default Header;
