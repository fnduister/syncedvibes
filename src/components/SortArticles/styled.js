import styled from "styled-components";
import { Fab } from "@material-ui/core";

export const SortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1em 0 0;
`;

export const SortButton = styled(Fab)`
  margin-right: 1em;
  background: ${props => (props.backgroundcolor ? "#c084f4" : "#c011f4")};
`;
