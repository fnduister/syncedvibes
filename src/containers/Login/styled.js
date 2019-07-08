import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 25em;
  justify-content: center;
  margin: 5em;

  && form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

