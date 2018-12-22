import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Article from "../../containers/Article/Article";

const Container = styled(Grid)`
  flex-grow: 1;
`;

const HomePage = () => {
  return (
    <Container
      container
      spacing={16}
      alignItems="center"
      direction="column"
      justify="center"
    >
      {[
        { title: "Hello bro that's good", url: "qQmJbeo6_9U" },
        { title: "I don't know you, do I?", url: "j8Xm7zoTUns" },
        { title: "Maybe cats eats pussy", url: "PExjV1W5LaM" }
      ].map(article => (
        <Article url={article.url} title={article.title} />
      ))}
    </Container>
  );
};

export default HomePage;
