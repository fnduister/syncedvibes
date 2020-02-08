import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  margin: 1em;

  && form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

