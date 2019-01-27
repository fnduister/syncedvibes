import React, { component, Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Youtube from "react-youtube";
import ScheduleIcon from "@material-ui/icons/Schedule";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import CommentSec from "../../containers/CommentSec/CommentSec";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import AddArticle from "../../components/AddArticle/AddArticle";
import {
  YoutubeStyled,
  Title,
  TimeStamp,
  Summary,
  ArticleGrid,
  ScheduleIconStyled,
  AspectRatio
} from "./styled";
import moment from "moment";
import Moment from "react-moment";
import "moment-timezone";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = { edit: false, comment: false };
  }
  onPlayerReady = evt => {
    evt.target.pauseVideo();
  };
  editHandler = () => {
    this.setState(state => ({ edit: !state.edit }));
  };
  commentHandler = () => {
    this.setState(state => ({ comment: !state.comment }));
  };
  render() {
    const opts = {
      width: "100%",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
    return !this.state.edit ? (
      <ArticleGrid item xs={10} md={8} lg={5}>
        <Title
          variant={this.props.onMobile ? "h3" : "h2"}
          component={Link}
          to="article"
          color="secondary"
        >
          {this.props.title}
        </Title>
        <TimeStamp variant="body2" color="textPrimary">
          <ScheduleIconStyled fontSize="small" />{" "}
          <Moment fromNow>{this.props.date}</Moment> by markvok
        </TimeStamp>
        <AspectRatio>
          <YoutubeStyled
            opts={opts}
            videoId={this.props.url}
            onReady={this.onPlayerReady}
          />
        </AspectRatio>
        <Summary variant="body1" color="textPrimary">
          {this.props.content}
        </Summary>
        <Button
          variant="contained"
          color="secondary"
          type="button"
          onClick={this.editHandler}
        >
          edit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          type="button"
          onClick={this.commentHandler}
        >
          {this.state.comment ? "- " : "+ "} comments
        </Button>

        {this.state.comment ? <CommentSec /> : null}
      </ArticleGrid>
    ) : (
      <Dialog
        open={this.state.edit}
        onClose={this.editHandler}
        aria-labelledby="form-dialog-title"
      >
        <AddArticle edit={this.state.edit} editHandler={this.editHandler} />
      </Dialog>
    );
  }
}

export default Article;
