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
        color="#c018f9"
      >
        video
      </SortButton>
      <SortButton
        onClick={() => toggleNewsFilterHandler()}
        backgroundcolor={filters.newsFilter}
        variant="outlined"
        color="#c018f9"
      >
        news
      </SortButton>
      <SortButton
        onClick={() => toggleAudioFilterHandler()}
        backgroundcolor={filters.audioFilter}
        variant="outlined"
        color="#c018f9"
      >
        audio
      </SortButton>
    </SortContainer>
  );
};

export default SortArticles;
