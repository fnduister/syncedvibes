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
        variant="extended"
      >
        video
      </SortButton>
      <SortButton
        onClick={() => toggleNewsFilterHandler()}
        backgroundcolor={filters.newsFilter}
        variant="extended"
      >
        news
      </SortButton>
      <SortButton
        onClick={() => toggleAudioFilterHandler()}
        backgroundcolor={filters.audioFilter}
        variant="extended"
      >
        audio
      </SortButton>
    </SortContainer>
  );
};

export default SortArticles;
