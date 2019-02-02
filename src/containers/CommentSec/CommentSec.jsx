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
  Form,
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
import classNames from "classnames";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Avatar from "../../images/savage.jpg";
import Moment from "react-moment";

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
            <AvatarCenterContainer>
              <AvatarStyled alt="User Avatar" src={Avatar} />
              {/* <img
              src={Avatar}
              alt="User Avatar"
              style={{ fontSize: "20px", height: "4.3vh", width: "3.2vw", borderRadius: "50%"}}
            /> */}
            </AvatarCenterContainer>
            <InformationContainer>
              <TextAreaStyled
                id="Comment"
                name="comment"
                label="Comment"
                multiline
                rowsMax="5"
                rows="1"
                value={this.state.currentComment.comment}
                onChange={this.onchangeText}
                margin="normal"
                fullWidth
              />
              <UserDetailsContainer>
                {/* <TextFieldStyled
                  id="outlined-name"
                  name="name"
                  label="Name"
                  value={this.state.currentComment.author}
                  onChange={this.onchangeText}
                  margin="normal"
                 
                />
                <TextFieldStyled
                  required
                  id="outlined-email"
                  name="email"
                  label="Email"
                  value={this.state.currentComment.email}
                  onChange={this.onchangeText}
                  margin="normal"
                  style={{ marginLeft: "0.5vw" }}
                /> */}
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
            <hr color="lightgrey" />
            <CommentContainer>
              <SmallAvatarStyled alt="User Avatar" src={Avatar} />

              <CommentDataContainer>
                <CommentUserStyled color="textPrimary">
                  {data.name}
                </CommentUserStyled>
                <Typography variant="body2" color="textPrimary">
                  <Moment fromNow>{this.props.date}</Moment> by markvok
                </Typography>
                <CommentTextStyled color="textPrimary">
                  {data.text}
                </CommentTextStyled>
              </CommentDataContainer>
            </CommentContainer>
          </div>
        ))}
      </Container>
    );
  }
}

export default CommentSec;
