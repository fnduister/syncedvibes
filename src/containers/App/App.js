import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import ArticleDetails from "../../pages/ArticleDetails";
import posed, { PoseGroup } from "react-pose";
import HomePage from "../../pages/HomePage";
import Header from "../Header/Header";
import { Parallax, ParallaxLayer } from "react-spring/addons";
import { MainContent } from "./styled";
import { GlobalStyle } from "../../GlobalStyle";
import Footer from "../Footer/Footer";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";

const Container = styled(Grid)`
  flex-grow: 1;
`;

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Header />
        <MainContent>
          <PoseGroup>
            <RouteContainer key="allo">
              <Container
                container
                alignItems="center"
                direction="column"
                justify="center"
              >
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/article" component={ArticleDetails} />
                </Switch>
              </Container>
            </RouteContainer>
          </PoseGroup>
        </MainContent>
        <Footer />
        <GlobalStyle />
      </Fragment>
    );
  }
}

export default App;
