import styled from "styled-components";
import { Formik } from "formik";
import DialogContent from "@material-ui/core/DialogContent";
import { TextField } from "formik-material-ui";
import SaveIcon from "@material-ui/icons/Save";
import { theme } from "../../../GlobalStyle";
import { Button } from "@material-ui/core";

export const TextInput = styled(TextField)`
  display: flex;
  margin: 1rem 0;
`;

