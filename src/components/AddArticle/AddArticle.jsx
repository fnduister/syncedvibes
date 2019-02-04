import React, { Fragment } from "react";
import { Formik } from "formik";
import { compose } from "redux";
import { withHandlers } from "recompose";
import { firebaseConnect } from "react-redux-firebase";
import DialogTitle from "@material-ui/core/DialogTitle";
import { DialogContentStyled } from "./styled";
import EditFormSchema from '../Forms/EditForm/EditForm';
import moment from "moment";
import "moment-timezone";

import EditForm from "../Forms/EditForm/EditForm";

const AddArticle = props => (
  <Fragment>
    <DialogTitle color="secondary">Add Article</DialogTitle>
    <DialogContentStyled>
      <Formik
        initialValues=""
        validationSchema={EditFormSchema}
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
