import React, { Fragment } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { compose } from "redux";
import { withHandlers } from "recompose";
import { firebaseConnect, withFirebase } from "react-redux-firebase";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import EditFormSchema from "../Forms/EditForm/EditFormSchema";
import { DialogContentStyled } from "./Styled";
import moment from "moment";
import Moment from "react-moment";
import "moment-timezone";

import EditForm from "../Forms/EditForm/EditForm";

const AddArticle = props => (
  <Fragment>
    <DialogTitle color="secondary">Add Article</DialogTitle>
    <DialogContentStyled>
      <Formik
        initialValues=""
        // validationSchema={EditFormSchema}
        onSubmit={(values, actions) => {
          const date = moment().format("LLLL");
          props.saveArticle({ ...values, date });
          actions.setSubmitting(false);
          actions.setStatus({ msg: "Set some arbitrary status or data" });
        }}
        render={props => <EditForm {...props} />}
      />
    </DialogContentStyled>
  </Fragment>
);

const enhance = compose(
  firebaseConnect("articles"),
  withHandlers({
    saveArticle: props => data => props.firebase.push("articles", data)
  })
);
export default enhance(AddArticle);
