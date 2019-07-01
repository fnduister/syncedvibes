import styled from "styled-components";
import { TextField } from "formik-material-ui";
import {
  RemoveCircle,
  LibraryAdd,
  FileCopy
} from "@material-ui/icons";

export const TextInput = styled(TextField)`
  display: flex;
  margin: 1rem 0;
`;

export const LibraryAddStyled = styled(LibraryAdd)`
  margin: .1em;
`;

export const RemoveCircleStyled = styled(RemoveCircle)`
`;

export const FileCopyStyled = styled(FileCopy)`
  margin: .1em;
`;