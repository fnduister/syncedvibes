import styled from "styled-components";
import { Fab } from "@material-ui/core";
import Button from '@material-ui/core/Button';

export const SortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1em 0 0;
`;

export const SortButton = styled(Button)` 
  margin-right: 1em;
  background: ${props => (props.backgroundcolor === true ? "#b9b9" : "#c018f9")};
  border-color:      #c018f9;
 color: ${props => (props.backgroundcolor === true ? "#c018f9" : "white")};
  & :active {
    background-color: #b9b9;
    color: #c018f9;
  }
`;
