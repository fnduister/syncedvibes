import React, { useState, useEffect } from "react";
import { SortContainer, SortButton } from "./styled";
import { ButtonGroup } from "@material-ui/core";

const FilterButtons = ({
  updateSelectedArticles,
  types
}) => {
  const [actives, changeActives] = useState({});

  useEffect(() => {
    types.forEach(type => {
      changeActives(actives => ({ ...actives, [type]: false }));
    });
  }, [types]);

  const handleFilter = type => {
    changeActives(actives => ({ ...actives, [type]: !actives[type] }));
    console.log("calling updateSelected");
    updateSelectedArticles(type);
  };

  return (
    <SortContainer>
      <ButtonGroup variant="contained">
        {types.map(type => {
          return (
            <SortButton
              key={type}
              backgroundcolor={actives[type] ? 1 : 0}
              onClick={() => handleFilter(type)}
            >
              {type}
            </SortButton>
          );
        })}
      </ButtonGroup>
    </SortContainer>
  );
};

export default FilterButtons;
