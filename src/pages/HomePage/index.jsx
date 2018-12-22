import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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
      <Grid item sm={8}>
        <Typography variant="h4" color="textPrimary">
          Iamsu - FreeStyles
        </Typography>
        <Typography variant="body" color="textPrimary">
          9 hours ago by markvok
        </Typography>
        <Typography variant="body" color="textPrimary">
          Video
        </Typography>
        <Typography variant="body" color="textPrimary">
          Text
        </Typography>
      </Grid>
    </Container>
  );
};

export default HomePage;
