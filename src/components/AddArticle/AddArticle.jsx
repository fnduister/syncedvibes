import React, { Fragment } from "react";
import { Formik } from "formik";
import { compose } from "redux";
import { withHandlers } from "recompose";
import { firebaseConnect } from "react-redux-firebase";
import { DialogContentStyled, DialogTitleStyled } from "./styled";
import EditFormSchema from "../Forms/EditForm/EditForm";
import moment from "moment";
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw
} from "draft-js";
import { connect } from "react-redux";
import "moment-timezone";
import EditForm from "../Forms/EditForm/EditForm";
import { openNotification } from "../Notification/reducer";

const AddArticle = props => {
  const contentState = props.article.content ? convertFromRaw(JSON.parse(props.article.content)) : null;
  return (
    <Fragment>
      <DialogContentStyled>
        <DialogTitleStyled color="secondary">Add Article</DialogTitleStyled>
        <Formik
          initialValues={{
            ...props.article,
            editorState: new EditorState.createWithContent(contentState)
          }}
          validationSchema={EditFormSchema}
          onSubmit={(values, actions) => {
            console.log({ article: props.article });
            actions.setSubmitting(false);
            const content = JSON.stringify(
              convertToRaw(values.editorState.getCurrentContent())
            );
            const { title, type, url, thumbnail } = values;
            const date = moment().format("LLLL");
            props.updateArticle({ title, type, url, thumbnail, date, content });
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
};

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
