import React, { Fragment, Component } from "react";
import {
  CommentBox,
  CommentList,
  CommentForm,
  Comment
} from "../../components/CommentSection/CommentSection";
import {
  CommentStyled,
  Form,
  Container,
  AvatarContainer,
  TextAreaStyled,
  InformationContainer,
  ButtonStyled,
  TextFieldStyled,
  UserDetailsContainer
} from "./styled";
import classNames from "classnames";
import TextField from "@material-ui/core/TextField";
import Avatar from "../../images/drake.gif";

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

  onchangeText = e => {
    this.setState({ currentComment: { [e.target.name]: e.target.value } });
  };

  render() {
    return (
      <Container>
        {/* <CommentBox />
      <CommentForm/>
      <CommentList/> */}

        <Form autoComplete="off" onSubmit={this.handleCommentSubmit}>
          <AvatarContainer>
            <img
              src={Avatar}
              alt="suckMydick"
              style={{ fontSize: "20px", height: "8vh", width: "5vw" }}
            />

            <InformationContainer>
              <TextAreaStyled
                //  id="outlined-multiline-flexible"
                //  label="Multiline"
                //  multiline
                //  rowsMax="4"
                //  value={this.state.multiline}
                //  onChange={this.handleChange('multiline')}
                //  className={classes.textField}
                //  margin="normal"
                //  helperText="hello"
                //  variant="outlined"

                id="Comment"
                name="comment"
                label="Comment"
                multiline
                rowsMax="5"
                rows="3"
                value={this.state.currentComment.comment}
                onChange={this.onchangeText}
                margin="normal"
                variant="outlined"
              />
              <UserDetailsContainer>
                <TextFieldStyled
                  id="outlined-name"
                  name="name"
                  label="Name"
                  value={this.state.currentComment.author}
                  onChange={this.onchangeText}
                  margin="normal"
                  variant="outlined"
                />
                <TextFieldStyled
                  required
                  id="outlined-email"
                  name="email"
                  label="Email"
                  value={this.state.currentComment.email}
                  onChange={this.onchangeText}
                  margin="normal"
                  variant="outlined"
                  style={{ marginLeft: "0.5vw" }}
                />
              </UserDetailsContainer>
              <ButtonStyled
                variant="contained"
                color="secondary"
                id="submit"
                value="Post"
                type="submit"
                
              >
                Submit
              </ButtonStyled>
            </InformationContainer>
          </AvatarContainer>
        </Form>

        {this.state.commentData.map(data => (
          <div>
            <CommentStyled color="textPrimary" variant="body1">
              {data.author}
            </CommentStyled>
            <CommentStyled color="textPrimary" variant="body1">
              {data.text}
            </CommentStyled>
          </div>
        ))}
      </Container>
    );
  }
}

export default CommentSec;
