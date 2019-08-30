import React, { Fragment } from "react";
import { EditorState, RichUtils, AtomicBlockUtils } from "draft-js";
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
  console.log("TCL: iframeCode", iframeCode);
  const regex = /https:\/\/[\w./]+/g;
  const justTesting = iframeCode.match(regex)[0];
  console.log("TCL: justTesting", justTesting);
  const code = iframeCode
    .match(regex)[0]
    .split("/")
    .pop();
  console.log("TCL: code", code);
  return code;
};

const Video = ({ url }) => {
  if (!!url) {
    console.log("TCL: Video in the renderer -> url", url);
    return (
      <Fragment>
        {console.log("parsing:", parseUrl(url))}
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
