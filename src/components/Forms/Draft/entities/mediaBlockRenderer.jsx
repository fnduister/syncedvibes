import React, { Fragment } from "react";
import { YoutubeStyled, AspectRatio } from "./styled";

export const mediaBlockRenderer = block => {
  if (block.getType() === "atomic") {
    return {
      component: Media,
      editable: false
    };
  }
  return null;
};

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

const parseUrl = iframeCode => {
  const regex = /https:\/\/[\w./]+/g;
  const code = iframeCode
    .match(regex)[0]
    .split("/")
    .pop();
  return code;
};

const Video = ({ url }) => {
  if (!!url) {
    return (
      <Fragment>
        {url.includes("youtube") ? (
          <AspectRatio>
            <YoutubeStyled
              opts={opts}
              videoId={parseUrl(url)}
              onReady={onPlayerReady}
            />
          </AspectRatio>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: url }} />
        )}
      </Fragment>
    );
  }
  return null;
};

const Media = props => {
  const entity = props.contentState.getEntity(props.block.getEntityAt(0));
  const { url } = entity.getData();
  const type = entity.getType();

  let media;

  if (type === "image") {
    media = <Video url={url} />;
  }

  return media;
};
