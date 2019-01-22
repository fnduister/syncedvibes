import React, { component, Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Youtube from "react-youtube";
import ScheduleIcon from "@material-ui/icons/Schedule";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import CommentSec from "../../containers/CommentSec/CommentSec";
import { Link } from "react-router-dom";
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

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = { edit: false };
  }
  onPlayerReady = evt => {
    evt.target.pauseVideo();
  };
  editHandler = () => {
    this.setState(state => ({ edit: !state.edit }));
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
          <ScheduleIconStyled fontSize="small" /> {this.props.time} hours ago by
          markvok
        </TimeStamp>
        <AspectRatio>
          <YoutubeStyled
            opts={opts}
            videoId={this.props.url}
            onReady={this.onPlayerReady}
          />
        </AspectRatio>
        <Summary variant="body1" color="textPrimary">
          Peezy takes it back to his roots with his new track “Ms. Lois House”,
          on which he reminisces about his journey under the roof that raised
          him.
        </Summary>
        <Button
          variant="contained"
          color="secondary"
          id="submit"
          value="Post"
          type="button"
          onClick={this.editHandler}
        >
          edit
        </Button>
        <CommentSec />
      </ArticleGrid>
    ) : (
      <AddArticle />
    );
  }
}

export default Article;
