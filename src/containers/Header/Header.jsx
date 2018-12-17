import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <IconButton color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit" align="justify">
        Home
      </Typography>
      <Typography variant="h6" color="inherit" align="justify">
        Article
      </Typography>
    </Toolbar>
  </AppBar>
);
export default Header;
