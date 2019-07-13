import React, { useState } from "react";
import AddCommentFormSchema from "../AddCommentForm/AddCommentValidation/AddCommentValidation";
import AddCommentForm from "../AddCommentForm/AddCommentForm";
import { Formik } from "formik";
import moment from "moment";

const AddCommentFormik = props => {
  const [pristine, setPristine] = useState(false);

  console.log({ props });
  const showButtons = () => {
    setPristine(true);
  };

  const changeOnBlur = () => {
    setPristine(true);
  };
  return (
    <Formik
      initialValues=""
      validationSchema={AddCommentFormSchema}
      onSubmit={(values, actions) => {
        actions.setSubmitting(true);
        actions.setStatus({ msg: "You need to be logged in to comment" });
        const date = moment().format();
        const avatarUrl = props.profile.avatarUrl
          ? props.profile.avatarUrl
          : null;
        const avatar = props.profile.avatar ? props.profile.avatar : null;
        console.log({ profile: props.profile });
        const comment = {
          ...values,
          user: {
            uid: props.auth.uid,
            displayName: props.profile.displayName,
            avatarUrl,
            avatar
          },
          date,
          replies: {},
          favorite: 0
        };
        props.addComment(comment);
        actions.setSubmitting(false);
        actions.resetForm();
        changeOnBlur();
      }}
      render={prop => (
        <AddCommentForm
          profile={props.profile}
          auth={props.auth}
          showButtons={showButtons}
          changeOnBlur={changeOnBlur}
          pristine={pristine}
          {...prop}
        />
      )}
    />
  );
};

export default AddCommentFormik;
