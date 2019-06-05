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
        backgroundcolor={filters.videoFilter}
        variant="outlined"
      >
        video
      </SortButton>
      <SortButton
        onClick={() => toggleNewsFilterHandler()}
        backgroundcolor={filters.newsFilter}
        variant="outlined"
      >
        news
      </SortButton>
      <SortButton
        onClick={() => toggleAudioFilterHandler()}
        backgroundcolor={filters.audioFilter}
        variant="outlined"
      >
        audio
      </SortButton>
    </SortContainer>
  );
};

export default SortArticles;
