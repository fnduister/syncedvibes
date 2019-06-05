import styled from "styled-components";
import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";

export const ControlsContainer = styled.div`
  background: #4e78a0;
  /* border-radius: 5px 5px 0 0; */
  font-family: "Georgia", serif;
  font-size: 14px;
  margin: 0;
  padding: 5px;
`;

export const Container = styled.div`
border: 1px solid #bfc0c1;
border-radius: 5px;
  &:hover{
    border-color: #2f3030;
  }
`;

export const EditorSection = styled.div`
  cursor: text;
  padding: 1em .5em;
  font-size: 16px;
  margin-top: 0;
`;

export const EditorStyled = styled(Editor)`

`;