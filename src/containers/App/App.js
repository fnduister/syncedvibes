import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import ArticleDetails from "../../pages/ArticleDetails";
import posed, { PoseGroup } from "react-pose";
import HomePage from "../../pages/HomePage";
import Header from "../Header/Header";
import { Parallax, ParallaxLayer } from "react-spring/addons";
import { MainContent } from "./styled";
import { GlobalStyle, viewport } from "../../GlobalStyle";
import Footer from "../Footer/Footer";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import withSizes from "react-sizes";

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
        <Header
          onMobile={this.props.onMobile}
          withDrawer={this.props.withDrawer}
          withTabs={this.props.withTabs}
        />
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
                  <Route
                    exact
                    path="/"
                    render={props => (
                      <HomePage {...props} onMobile={this.props.onMobile} />
                    )}
                  />
                  <Route
                    path="/article"
                    onMobile={this.props.onMobile}
                    render={props => (
                      <ArticleDetails
                        {...props}
                        onMobile={this.props.onMobile}
                      />
                    )}
                  />
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

const mapProps = (state, ownProps) => ({});

const mapActions = {};

const mapSizesToProps = ({ width }) => ({
  withTabs: width > viewport.md,
  withDrawer: width > viewport.sm,
  onMobile: width < viewport.md
});

export default connect(
  mapProps,
  mapActions
)(withSizes(mapSizesToProps)(App));
