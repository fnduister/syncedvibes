import React, { Fragment, useState } from "react";
import { Formik } from "formik";
import { compose } from "redux";
import { withHandlers } from "recompose";
import { firebaseConnect, isLoaded } from "react-redux-firebase";
import { DialogContentStyled, DialogTitleStyled } from "./styled";
import EditFormSchema from "../Forms/EditForm/EditFormSchema";
import moment from "moment";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { connect } from "react-redux";
import "moment-timezone";
import EditForm from "../Forms/EditForm/EditForm";
import { openNotification } from "../Notification/reducer";
import Axios from "axios";

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
  const [file, setFile] = useState("");
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
            editorState: !add
              ? new EditorState.createWithContent(contentState)
              : new EditorState.createEmpty()
          }}
          validationSchema={EditFormSchema}
          onSubmit={async (values, actions) => {
            actions.setSubmitting(false);
            const content = JSON.stringify(
              convertToRaw(values.editorState.getCurrentContent())
            );
            const { title, type, thumbnail, media } = values;
            const date = moment().format();
            const formData = new FormData();
            formData.append("file", file);
            const dataToSave = {
              title,
              type,
              media,
              thumbnail,
              date,
              content
            };

            try {
              if (add) {
                console.log("tryinhg");
                await Axios.post("http://localhost:5000/upload", formData, {
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                });
              }
            } catch (err) {
              console.log(err);
            }

            if (edit) {
              editHandler();
              updateArticle(dataToSave);
              openNotificationHandler("Modification Saved", "success");
            }

            // if (add) {
            //   saveArticle(dataToSave);
            //   openNotificationHandler("Article Added", "success");
            // }

            actions.setSubmitting(false);
            actions.setStatus({ msg: "Recorded" });
          }}
          render={formikProps => (
            <EditForm
              types={settings.types}
              {...formikProps}
              setFile={setFile}
            />
          )}
        />
        {console.log("dans addArticle")}
      </DialogContentStyled>
    </Fragment>
  );
};

const enhance = compose(
  firebaseConnect(() => ["articles", "settings"]),
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
