import styled from "styled-components";
import Menu from "./Menu";
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import { theme } from "../../GlobalStyle";

export const BottomNavBar = styled(AppBar)`
    background-color: ${theme.palette.primary[300]};
    position: relative;
    opacity: ${props => props.opacity}
`;
