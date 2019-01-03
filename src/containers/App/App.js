import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import ArticleDetails from "../../pages/ArticleDetails";
import HomePage from "../../pages/HomePage";
import Header from "../Header/Header";
import { Parallax, ParallaxLayer } from "react-spring/addons";
import { MainContent } from "./styled";
import { GlobalStyle } from "../../GlobalStyle";
import Footer from "../Footer/Footer";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

const Container = styled(Grid)`
  flex-grow: 1;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Container
          container
          spacing={16}
          alignItems="center"
          direction="column"
          justify="center"
        >
          <MainContent>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/article" component={ArticleDetails} />
            </Switch>
          </MainContent>
        </Container>
        <Footer />
        <GlobalStyle />
      </Fragment>
    );
  }
}

export default App;
