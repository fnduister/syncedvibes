import styled from 'styled-components';
import Editor from 'draft-js-plugins-editor';
import { theme } from '../../../GlobalStyle';




export const InlineToolbarContainer = styled.div`
  && {
    position: absolute !important;
    border: 1px solid #111;
    background: #333;
    border-radius: 4px;
    box-shadow: 0px 1px 3px 0px rgba(220, 220, 220, 1);
    z-index: 2;
    box-sizing: border-box;
  }
`;

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

  & img{
    max-width: 100%;
    max-height: 100%;
  }
`;

export const EditorSection = styled.div`
  box-sizing: border-box;
  border: 1px solid #ddd;
  cursor: text;
  padding: 16px;
  border-radius: 2px;
  margin-bottom: 2em;
  box-shadow: inset 0px 1px 8px -3px #ababab;
  background: #fefefe;

  &:global(.public-DraftEditor-content) {
    min-height: 140px;
  }
`;

export const EditorStyled = styled(Editor)``;
