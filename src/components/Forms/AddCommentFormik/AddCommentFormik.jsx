import React, { PureComponent } from "react";
import AddCommentFormSchema from "../AddCommentForm/AddCommentValidation/AddCommentValidation";
import AddCommentForm from "../AddCommentForm/AddCommentForm";
import { Formik } from "formik";
import moment from "moment";

class AddCommentFormik extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { pristine: false };
  }
  render() {
    const showButtons = () => {
      this.setState(state => ({ pristine: true }));
    };

    const changeOnBlur = () => {
      console.log("change on changeOnBlur");
      this.setState(state => ({ pristine: false }));
    };
    return (
      <Formik
        initialValues=""
        validationSchema={AddCommentFormSchema}
        onSubmit={(values, actions) => {
          actions.setSubmitting(true);
          actions.setStatus({ msg: "Set some arbitrary status or data" });
          const date = moment().format("LLLL");
          const avatarUrl = this.props.profile.avatarUrl
            ? this.props.profile.avatarUrl
            : null;
          const avatar = this.props.profile.avatar
            ? this.props.profile.avatar
            : null;
          console.log({ profile: this.props.profile });
          const comment = {
            ...values,
            user: {
              uid: this.props.auth.uid,
              displayName: this.props.profile.displayName,
              avatarUrl,
              avatar
            },
            date,
            replies: {},
            favorite: 0
          };
          this.props.addComment(comment);
          actions.setSubmitting(false);
          actions.resetForm();
          changeOnBlur();
        }}
        render={props => (
          <AddCommentForm
            profile={this.props.profile}
            auth={this.props.auth}
            showButtons={showButtons}
            changeOnBlur={changeOnBlur}
            pristine={this.state.pristine}
            {...props}
          />
        )}
      />
    );
  }
}

export default AddCommentFormik;
