import styled from 'styled-components';
import { TextField, SimpleFileUpload } from 'formik-material-ui';
import SaveIcon from '@material-ui/icons/Save';
import { Button } from '@material-ui/core';
import { Form } from 'formik';
import { LibraryAdd } from '@material-ui/icons';
import { theme } from '../../../GlobalStyle';
import CircularProgress from '@material-ui/core/CircularProgress';

export const FileInput = styled(SimpleFileUpload)``;

export const TextContent = styled(TextField)`
  display: flex;
  margin: 1rem 0;
`;

export const FormStyled = styled(Form)`
  width: 100%;
`;

export const TextType = styled(TextContent)`
  width: 20vw;
`;
export const TextUrl = styled(TextContent)``;
export const TextTitle = styled(TextContent)``;
export const ButtonStyled = styled(Button)`
  background: ${theme.palette.primary[600]};
  margin-top: 0.5em;
  display: flex;
  align-self: flex-end;
`;
export const SubmitButtonStyled = styled(Button)`
  background: #e91e63;
  margin-top: 0.5em;
  display: flex;
  align-self: flex-end;
`;
export const SaveIconStyled = styled(SaveIcon)`
  font-size: 20px;
  margin-right: 0.3em;
`;

export const ProgressStyled = styled(CircularProgress)`
  margin-right: .5em;
`;

export const LibraryAddStyled = styled(LibraryAdd)`
  margin-right: 0.4em;
`;
