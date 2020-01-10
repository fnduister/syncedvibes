import React, { useEffect } from 'react';
import ImagesButton from '../Images/ImagesButton';
import {InputStyled, Container} from '../Images/styled';

const InputButton = (props) => {
  const onWindowClick = () =>
    // Call `onOverrideContent` again with `undefined`
    // so the toolbar can show its regular content again.
    props.onOverrideContent(undefined);

  useEffect(() => {
    console.log({props});
    setTimeout(() => {
      window.addEventListener('click', onWindowClick);
    });
    return () => window.removeEventListener('click', onWindowClick);
  }, []);

  return (
    <Container>
      <InputStyled type='text' />
      <button>+</button>
    </Container>
  );
};

export default InputButton;
