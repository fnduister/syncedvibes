import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

export const LogoStyled = styled.img`
  height: 30em;
  width: 30em;
  color: white;

`;
export const TitleBox = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  justify-content: center;
  margin-bottom: 25vh;
  color: white;
  width: 90vw;
`;

export const TitleStyled = styled(Typography)`
  text-align: center;
`;