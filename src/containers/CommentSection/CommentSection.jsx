import React, { Component } from "react";
import { Container } from "./styled";
import { compose } from "redux";
import CommentList from "../../components/CommentList/CommentList";
import AddCommentFormik from '../../components/Forms/AddCommentFormik/AddCommentFormik';
import { connect } from "react-redux";


class CommentSection extends Component {
  
  render() {
    return (
      <Container>
        <AddCommentFormik profile={this.props.profile} auth={this.props.auth} addComment={this.props.addComment}/>
        <CommentList comments={this.props.comments} updateComment={this.props.updateComment}/>
      </Container>
    );
  }
}

const enhance = compose(
  connect(({ firebase: { profile, auth } }) => ({ profile, auth }))
);

export default enhance(CommentSection);
