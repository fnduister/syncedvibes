import React, { useState, Fragment } from 'react';
import { Container } from './styled';

const CustomCard = ({ children, onMobile }) => {
  const [raised, toggleRaised] = useState(false);

  return (
    <Fragment>
      {!onMobile ? (
        <Container
          onMouseLeave={() => toggleRaised(false)}
          onMouseEnter={() => toggleRaised(true)}
          raised={raised}
        >
          {children}
        </Container>
      ) : (
        <Fragment>{children}</Fragment>
      )}
    </Fragment>
  );
};

export default CustomCard;
