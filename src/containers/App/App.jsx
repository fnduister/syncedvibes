import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ArticleDetails from "../../pages/ArticleDetails";
import posed, { PoseGroup } from "react-pose";
import HomePage from "../../pages/HomePage";
import Header from "../Header/Header";
import Notification from "../../components/Notification/Notification";
import { GlobalStyle, viewport } from "../../GlobalStyle";
import Footer from "../Footer/Footer";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import testFirebase from "../../components/testComponent/testFirebase";
import withSizes from "react-sizes";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import "moment-timezone";

const Container = styled(Grid)`
  flex-grow: 1;
`;

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 350, beforeChildren: true },
  exit: { opacity: 0 }
});

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header
            // onMobile={this.props.onMobile}
          />
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
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={SignUp} />
                    <Route
                      path="/article/:articleId"
                      render={props => (
                        <ArticleDetails
                          {...props}
                          onMobile={this.props.onMobile}
                        />
                      )}
                    />
                    <Route path="/test" component={testFirebase} />
                  </Switch>
                </Container>
              </RouteContainer>
            </PoseGroup>
          <Footer />
          <GlobalStyle />
          <Notification />
        </Fragment>
      </Router>
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
