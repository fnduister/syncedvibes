import React, { useState } from 'react';
import { InputStyled, Container } from './styled';

const InputButton = ({modifier, onChange, editorState, onOverrideContent}) => {
  const [hoveringOnInput, setHover] = useState(false);
  const [value, setValue] = useState('');

  const handleBlur = (event) => {
    if(!hoveringOnInput){
      onOverrideContent(undefined);
    }
  };
  
  const handleClickInput = (event) => {
    event.stopPropagation();
  };
  
  const onsubmit = (event) => {
    event.stopPropagation();
    onOverrideContent(undefined);
    onChange(modifier(editorState, {src: value}));
  };

  return (
    <Container
      onBlur={handleBlur}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <InputStyled placeholder='http://' onChange={(event) => setValue(event.target.value)} onClick={handleClickInput} type='text' />
      <button onClick={onsubmit}>+</button>
    </Container>
  );
};

export default InputButton;
