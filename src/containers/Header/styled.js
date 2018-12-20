import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import backgroundImage from "../../images/jan-strecha-722905-unsplash.jpg";

export const Background = styled.div`
  background-image: url(${backgroundImage});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-size: cover;
  background-position: center;
  width: 100wh;
  height: 100vh;
`;

export const BottomLine = styled.div`
  background-color: purple;
  height: 1vh;
  width: 100wh;
`;

export const AppBarStyled = styled(AppBar)`
    background: transparent;
    box-shadow: none;
    height: 5vh;
`;
