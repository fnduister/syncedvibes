import React from "react";
import { SortContainer, SortButton } from "./styled";
import { ButtonGroup } from "@material-ui/core";

const SortArticles = ({
  toggleAudioFilterHandler,
  toggleNewsFilterHandler,
  toggleVideoFilterHandler,
  filters
}) => {
  return (
    <SortContainer>
      <ButtonGroup variant="contained">
        <SortButton
          onClick={() => toggleVideoFilterHandler()}
          backgroundcolor={filters.videoFilter ? 1 : 0}
        >
          video
        </SortButton>
        {console.log({ videoFilter: filters })}
        <SortButton
          onClick={() => toggleNewsFilterHandler()}
          backgroundcolor={filters.newsFilter ? 1 : 0}
        >
          news
        </SortButton>
        <SortButton
          onClick={() => toggleAudioFilterHandler()}
          backgroundcolor={filters.audioFilter ? 1 : 0}
        >
          audio
        </SortButton>
      </ButtonGroup>
    </SortContainer>
  );
};

export default SortArticles;
