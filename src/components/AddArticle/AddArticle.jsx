import React from "react";
import { Form ,Formik, Field, ErrorMessage } from "formik";
import TextField from '@material-ui/core/FormField';
import { compose } from 'redux'
import { withHandlers } from 'recompose';
import {
  firebaseConnect,
  withFirebase
} from "react-redux-firebase";

const AddArticle = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
        initialValues={user /** { email, social } */}
        onSubmit={(values, actions) => {
              props.saveArticle(values);
            error => {
              actions.setSubmitting(false);
              actions.setErrors(transformMyRestApiErrorsToAnObject(error));
              actions.setStatus({ msg: 'Set some arbitrary status or data' });
              <br/>
            }
          );
        }}
        render={({ errors, status, touched, isSubmitting }) => (
          <Form>
            <Field type="text" name="content" component={TextField} />
            <ErrorMessage name="content" component="div" />  
            <Field type="text" className="error" name="social.facebook" />
            <ErrorMessage name="social.facebook">
              {errorMessage => <div className="error">{errorMessage}</div>}
            </ErrorMessage>
            <Field type="text" name="social.twitter" />
            <ErrorMessage name="social.twitter" className="error" component="div"/>  
            {status && status.msg && <div>{status.msg}</div>}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      />
  </div>
);


const enhance = compose(
  firebaseConnect("articles"),
  withHandlers({
    saveArticle: props => data => props.firebase.update("articles", data) 
  })
  );
  export default enhance(AddArticle);