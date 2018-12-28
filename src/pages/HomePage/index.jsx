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
        { title: "Hello bro that's good", url: "qQmJbeo6_9U", time: 1, id: 1 },
        { title: "I don't know you, do I?", url: "j8Xm7zoTUns", time: 3, id: 2 },
        { title: "Maybe cats eat pussy", url: "PExjV1W5LaM", time: 5, id: 3 }
      ].map(article => (
        <Article url={article.url} title={article.title} time={article.time} key={article.id}/>
      ))}
    </Container>
  );
};

export default HomePage;
