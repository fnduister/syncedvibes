import React from "react";
import { SortContainer, SortButton } from "./styled";

const SortArticles = (
  toggleAudioFilterHandler,
  toggleNewsFilterHandler,
  toggleVideoFilterHandler,
  filters
) => (
  <SortContainer>
    <SortButton
      onclick={() => toggleVideoFilterHandler}
      backgroundcolor={filters.videoFilter}
      variant="extended"
    >
      video
    </SortButton>
    <SortButton
      onclick={() => toggleNewsFilterHandler}
      backgroundcolor={filters.newsFilter}
      variant="extended"
    >
      news
    </SortButton>
    <SortButton
      onclick={() => toggleAudioFilterHandler}
      backgroundcolor={filters.audioFilter}
      variant="extended"
    >
      audio
    </SortButton>
  </SortContainer>
);

export default SortArticles;
