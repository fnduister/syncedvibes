import React, { Fragment, Component } from "react";
import {
  CommentBox,
  CommentList,
  CommentForm,
  Comment
} from "../../components/CommentSection/CommentSection";
import {
  CommentUserStyled,
  CommentTextStyled,
  Container,
  AvatarContainer,
  AvatarCenterContainer,
  TextAreaStyled,
  InformationContainer,
  ButtonStyled,
  TextFieldStyled,
  UserDetailsContainer,
  AvatarStyled,
  SmallAvatarStyled,
  CommentDataContainer,
  CommentContainer
} from "./styled";
import { Form, Formik, Field, ErrorMessage } from "formik";
import classNames from "classnames";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Avatar from "../../images/savage.jpg";
import moment from "moment";
import Moment from "react-moment";
import { compose } from "redux";
import { withHandlers } from "recompose";
import { firebaseConnect, withFirebase } from "react-redux-firebase";
import AddCommentForm from "../../components/Forms/AddCommentForm/AddCommentForm";

class CommentSec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentData: [
        {
          name: "User1",
          text: "Sample Comment 1"
        },
        {
          name: "User2",
          text: "Sample Comment 2"
        }
      ],
      currentComment: {
        name: "",
        email: "",
        comment: ""
      }
    };
  }

  handleCommentSubmit = e => {
    e.preventDefault();
    console.log("submit");
  };
  showSubmitButton = e => {
    console.log("submit");
  };

  onchangeText = e => {
    this.setState({ currentComment: { [e.target.name]: e.target.value } });
  };

  render() {
    return (
      <Container>
        <Fragment>
          <AvatarContainer>
            <AvatarCenterContainer>
              <AvatarStyled alt="User Avatar" src={Avatar} />
            </AvatarCenterContainer>
            <InformationContainer />
          </AvatarContainer>
        </Fragment>

        {this.props.comments
          ? this.props.comments.map((key, value) => (
              <CommentContainer>
                <SmallAvatarStyled alt="User Avatar" src={Avatar} />
                <Formik
                  initialValues=""
                  // validationSchema={AddCommentForm}
                  onSubmit={(values, actions) => {
                    const date = moment().format("LLLL");
                    // props.saveArticle({ ...values, date });
                    actions.setSubmitting(false);
                    actions.setStatus({
                      msg: "Set some arbitrary status or data"
                    });
                  }}
                  render={props => <AddCommentForm {...props} />}
                />
                <CommentDataContainer>
                  <CommentUserStyled color="textPrimary">
                    {value.name}
                  </CommentUserStyled>
                  <Typography variant="body2" color="textPrimary">
                    <Moment fromNow>{this.props.date}</Moment> by markvok
                  </Typography>
                  <CommentTextStyled color="textPrimary">
                    {value.text}
                  </CommentTextStyled>
                </CommentDataContainer>
              </CommentContainer>
            ))
          : "null"}
      </Container>
    );
  }
}

export default CommentSec;
