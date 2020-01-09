import React, { useEffect } from 'react';
import ImagesButton from './ImagesButton';

const InputButton = (props) => {
  const onWindowClick = () =>
    // Call `onOverrideContent` again with `undefined`
    // so the toolbar can show its regular content again.
    props.onOverrideContent(ImagesButton);

  useEffect(() => {
    console.log({props});
    setTimeout(() => {
      window.addEventListener('click', onWindowClick);
    });
    return () => window.removeEventListener('click', onWindowClick);
  }, []);

  return (
    <div>
      <input type='text' />
      <button>+</button>
    </div>
  );
};

export default InputButton;
