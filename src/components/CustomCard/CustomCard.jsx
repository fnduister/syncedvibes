import React, { useState } from "react";
import { Container } from "./styled";

const CustomCard = props => {
  const [raised, toggleRaised] = useState(false);

  return (
    <Container
      onMouseLeave={() => toggleRaised(false)}
      onMouseEnter={() => toggleRaised(true)}
      raised={raised}
    >
      {props.children}
    </Container>
  );
};

export default CustomCard;
