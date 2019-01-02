import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Youtube from "react-youtube";
import ScheduleIcon from "@material-ui/icons/Schedule";
import Icon from "@material-ui/core/Icon";
import CommentSection from '../../components/CommentSection/CommentSection';
import {Link} from 'react-router-dom';
import {
  Title,
  TimeStamp,
  Summary,
  ArticleGrid,
  ScheduleIconStyled
} from "./styled";

export default function Article(props) {
  const opts = {
    height: "428",
    width: "747",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };

  const onPlayerReady = evt => {
    evt.target.pauseVideo();
  };

  return (
    <ArticleGrid item md={6} lg={5}>
      <Title variant="h2" color="secondary">
        <Link to="article">{props.title}</Link>
      </Title>
      <TimeStamp variant="body2" color="textPrimary">
        <ScheduleIconStyled fontSize="small" /> {props.time} hours ago by markvok
      </TimeStamp>
      <Youtube opts={opts} videoId={props.url} onReady={onPlayerReady} />
      <Summary variant="body1" color="textPrimary">
        Peezy takes it back to his roots with his new track “Ms. Lois House”, on
        which he reminisces about his journey under the roof that raised him.
      </Summary>
      <CommentSection/>
    </ArticleGrid>
    
  );
}
