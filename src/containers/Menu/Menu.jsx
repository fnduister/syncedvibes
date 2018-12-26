import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { BottomNavBar } from "./styled";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const Menu = ({opacity}) => {
  return (
    <BottomNavBar opacity>
      <Tabs indicatorColor="default" textColor="inherit" centered>
        <Tab label="Music" />
        <Tab label="News" />
        <Tab label="Photography" />
        <Tab label="Articles" />
        <Tab label="About" />
      </Tabs>
    </BottomNavBar>
  );
};

export default Menu;
