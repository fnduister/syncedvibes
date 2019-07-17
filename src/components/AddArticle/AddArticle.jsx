import React, { Fragment } from "react";
import { Formik } from "formik";
import { compose } from "redux";
import { withHandlers } from "recompose";
import { firebaseConnect, isLoaded } from "react-redux-firebase";
import { DialogContentStyled, DialogTitleStyled } from "./styled";
import EditFormSchema from "../Forms/EditForm/EditForm";
import moment from "moment";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { connect } from "react-redux";
import "moment-timezone";
import EditForm from "../Forms/EditForm/EditForm";
import { openNotification } from "../Notification/reducer";

const AddArticle = ({
  settings,
  article,
  add,
  updateArticle,
  saveArticle,
  editHandler,
  edit,
  openNotificationHandler
}) => {
  let contentState = {};
  let articlesDefault = {};
  if (article) {
    contentState = article.hasOwnProperty("content")
      ? convertFromRaw(JSON.parse(article.content))
      : null;
    articlesDefault = { ...article };
  }
  if (!isLoaded(settings)) return <div>...loading</div>;
  return (
    <Fragment>
      <DialogContentStyled>
        <DialogTitleStyled color="secondary">Add Article</DialogTitleStyled>
        <Formik
          initialValues={{
            ...articlesDefault,
            editorState: !add ? new EditorState.createWithContent(contentState) : new EditorState.createEmpty()
          }}
          validationSchema={EditFormSchema}
          onSubmit={(values, actions) => {
            console.log({ article });
            actions.setSubmitting(false);
            const content = JSON.stringify(
              convertToRaw(values.editorState.getCurrentContent())
            );
            const { title, type, thumbnail, media } = values;
            const date = moment().format();
            const dataToSave = {
              title,
              type,
              media,
              thumbnail,
              date,
              content
            };
            if (edit) {
              editHandler();
              updateArticle(dataToSave);
            }

            if (add) {
              saveArticle(dataToSave);
            }
            actions.setSubmitting(false);
            actions.setStatus({ msg: "Recorded" });

            openNotificationHandler("Modification saved", "success");
          }}
          render={formikProps => (
            <EditForm types={settings.types} {...formikProps} />
          )}
        />
        {console.log("dans addArticle")}
      </DialogContentStyled>
    </Fragment>
  );
};

const enhance = compose(
  firebaseConnect(() => ["articles","settings"]),
  connect(
    ({ firebase }, props) => ({
      settings: firebase.data.settings // lodash's get can also be used
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
