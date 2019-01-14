import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Youtube from "react-youtube";
import ScheduleIcon from "@material-ui/icons/Schedule";
import Icon from "@material-ui/core/Icon";
import CommentSec from "../../containers/CommentSec/CommentSec";
import { Link } from "react-router-dom";
import {
  YoutubeStyled,
  Title,
  TimeStamp,
  Summary,
  ArticleGrid,
  ScheduleIconStyled,
  AspectRatio
} from "./styled";

export default function Article(props) {
  const opts = {
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };

  const onPlayerReady = evt => {
    evt.target.pauseVideo();
  };

  return (
    <ArticleGrid item xs={10} md={8} lg={5}>
      <Title
        variant={props.onMobile ? "h3" : "h2"}
        component={Link}
        to="article"
        color="secondary"
      >
        {props.title}
      </Title>
      <TimeStamp variant="body2" color="textPrimary">
        <ScheduleIconStyled fontSize="small" /> {props.time} hours ago by
        markvok
      </TimeStamp>
      <AspectRatio>
        <YoutubeStyled
          opts={opts}
          videoId={props.url}
          onReady={onPlayerReady}
        />
      </AspectRatio>
      <Summary variant="body1" color="textPrimary">
        Peezy takes it back to his roots with his new track “Ms. Lois House”, on
        which he reminisces about his journey under the roof that raised him.
      </Summary>
      {/* <CommentSec/> */}
    </ArticleGrid>
  );
}
