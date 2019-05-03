import React, { Fragment } from "react";
import { Formik } from "formik";
import { compose } from "redux";
import { withHandlers } from "recompose";
import { firebaseConnect } from "react-redux-firebase";
import DialogTitle from "@material-ui/core/DialogTitle";
import { DialogContentStyled } from "./styled";
import EditFormSchema from "../Forms/EditForm/EditForm";
import {stateToHTML} from 'draft-js-export-html';
import moment from "moment";
import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";
import { connect } from "react-redux";
import "moment-timezone";
import EditForm from "../Forms/EditForm/EditForm";
import { openNotification } from "../Notification/reducer";

const AddArticle = props => (
  <Fragment>
    <DialogTitle color="secondary">Add Article</DialogTitle>
    <DialogContentStyled>
      <Formik
        initialValues={{ ...props.article, editorState: new EditorState.createEmpty() }}
        validationSchema={EditFormSchema}
        onSubmit={(values, actions) => {
          const html = stateToHTML(values.editorState);
          console.log("TCL: values", html);
          const date = moment().format("LLLL");
          props.updateArticle({ ...values, date });
          actions.setSubmitting(false);
          actions.setStatus({ msg: "Recorded" });
          props.editHandler();
          props.openNotificationHandler("Modification saved", "success");
        }}
        render={formikProps => (
          <EditForm types={props.types} {...formikProps} />
        )}
      />
    </DialogContentStyled>
  </Fragment>
);

const enhance = compose(
  firebaseConnect("articles", "settings"),
  connect(
    ({ firebase }, props) => ({
      types: firebase.data.settings.articlesTypes // lodash's get can also be used
    }),
    {
      openNotificationHandler: (message, variant) =>
        openNotification(message, variant)
    }
  ),
  withHandlers({
    saveArticle: props => data => props.firebase.push("articles", data)
  })
);
export default enhance(AddArticle);
