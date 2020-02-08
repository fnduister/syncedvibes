import React, { useState, useEffect } from 'react';
import { SortContainer, SortButton } from './styled';
import { ButtonGroup } from '@material-ui/core';

const FilterButtons = ({ modifySelectedTypes, types, onMobile }) => {
  const [actives, changeActives] = useState({});

  useEffect(() => {
    types.forEach((type) => {
      changeActives((actives) => ({ ...actives, [type.key]: false }));
    });
  }, [types]);

  const handleFilter = (type) => {
    changeActives((actives) => ({ ...actives, [type.key]: !actives[type.key] }));
    modifySelectedTypes(type);
  };

  return (
    <SortContainer>
      <ButtonGroup size={onMobile? "small": "large"} variant='contained'>
        {types.map((type) => {
          return (
            <SortButton
              key={type.key}
              backgroundcolor={actives[type.key] ? 1 : 0}
              onClick={() => handleFilter(type)}
            >
              {type.value}
            </SortButton>
          );
        })}
      </ButtonGroup>
    </SortContainer>
  );
};

export default FilterButtons;
