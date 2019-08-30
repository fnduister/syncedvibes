import styled from "styled-components";
import { Editor } from "draft-js";
import { theme } from "../../../GlobalStyle";
import Button from "./Button/Button";

export const ControlsContainer = styled.div`
  background: ${theme.palette.primary[900]};
  font-size: 14px;
  margin: 0;
  padding: 5px;
`;

// export const CustomButton = styled(Button)`
//   font-size: 14px;
//   margin: 0;
//   padding: 0;
//   color: white;
// `;

export const Container = styled.div`
  border: 1px solid #bfc0c1;
  border-radius: 5px;
  &:hover {
    border-color: #2f3030;
  }
`;

export const EditorSection = styled.div`
  cursor: text;
  padding: 1em 0.5em;
  font-size: 16px;
  margin-top: 0;
`;

export const EditorStyled = styled(Editor)``;
