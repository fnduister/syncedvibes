import React, { Fragment, useState } from 'react';
import { Formik } from 'formik';
import { compose } from 'redux';
import { withHandlers } from 'recompose';
import { createEditorStateWithText } from 'draft-js-plugins-editor';

import { withRouter } from 'react-router';
import { firebaseConnect, isLoaded, useFirebase } from 'react-redux-firebase';
import { DialogContentStyled, DialogTitleStyled } from './styled';
import EditFormSchema from '../Forms/EditForm/EditFormSchema';
import moment from 'moment';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { connect } from 'react-redux';
import 'moment-timezone';
import EditForm from '../Forms/EditForm/EditForm';
import { openNotification } from '../Notification/reducer';
import Axios from 'axios';

const AddArticle = ({
  settings,
  article,
  add,
  updateArticle,
  saveArticle,
  editHandler,
  edit,
  firebase,
  openNotificationHandler,
  location,
  history,
}) => {
  let contentState = {};
  const [editorState, seteditorState] = useState(
    !add ? new EditorState.createWithContent(contentState) : new createEditorStateWithText(''),
  );
  let articlesDefault = {};
  const [file, setFile] = useState('');
  const [submited, setSubmited] = useState(false);
  if (article) {
    contentState = article.hasOwnProperty('content')
      ? convertFromRaw(JSON.parse(article.content))
      : null;
    articlesDefault = { ...article };
  }
  if (!isLoaded(settings)) return <div>...loading</div>;

  return (
    <Fragment>
      <DialogContentStyled>
        <DialogTitleStyled color='secondary'>Add Article</DialogTitleStyled>
        <Formik
          initialValues={{
            ...articlesDefault,
          }}
          validationSchema={EditFormSchema}
          onSubmit={async (values, actions) => {
            if (!submited) {
              actions.setSubmitting(true);
              const content = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
              console.log("TCL: content", content)
              let { title, type, thumbnail, media } = values;
              if (media === undefined) {
                media = [];
              }
              const date = moment().format();
              const dataToSave = {
                title,
                type,
                media,
                thumbnail,
                date,
                content,
              };

              try {
                if (add) {
                  await firebase.uploadFile(`gifs`, file);
                  console.log("TCL: file", file)
                }
              } catch (err) {
                console.error({ err });
              }

              if (edit) {
                editHandler();
                updateArticle(dataToSave);
                openNotificationHandler('Modification Saved', 'success');
              }

              if (add) {
                saveArticle(dataToSave);
                openNotificationHandler('Article Added', 'success');
                history.push('/');
              }

              actions.setSubmitting(false);
              actions.setStatus({ msg: 'Recorded' });
            }
          }}
          render={(formikProps) => (
            <EditForm
              types={settings.types}
              editorState={editorState}
              changeEditorState={seteditorState}
              {...formikProps}
              setFile={setFile}
            />
          )}
        />
        {console.log('dans addArticle')}
      </DialogContentStyled>
    </Fragment>
  );
};

const enhance = compose(
  firebaseConnect(() => ['articles', 'settings']),
  connect(
    ({ firebase }, props) => ({
      settings: firebase.data.settings, // lodash's get can also be used
    }),
    {
      openNotificationHandler: (message, variant) => openNotification(message, variant),
    },
  ),
  withRouter,
  withHandlers({
    saveArticle: (props) => (data) => props.firebase.push('articles', data),
  }),
);
export default enhance(AddArticle);
