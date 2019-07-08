import React from "react";
import { SortContainer, SortButton } from "./styled";

const SortArticles = ({
  toggleAudioFilterHandler,
  toggleNewsFilterHandler,
  toggleVideoFilterHandler,
  filters
}) => {
  return (
    <SortContainer>
      <SortButton
        onClick={() => toggleVideoFilterHandler()}
        backgroundcolor={filters.videoFilter ? 1 : 0}
        variant="outlined"
      >
        video
      </SortButton>
      <SortButton
        onClick={() => toggleNewsFilterHandler()}
        backgroundcolor={filters.newsFilter ? 1 : 0}
        variant="outlined"
      >
        news
      </SortButton>
      <SortButton
        onClick={() => toggleAudioFilterHandler()}
        backgroundcolor={filters.audioFilter ? 1 : 0}
        variant="outlined"
      >
        audio
      </SortButton>
    </SortContainer>
  );
};

export default SortArticles;
