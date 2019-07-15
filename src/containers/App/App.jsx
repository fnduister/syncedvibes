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
import AdminButtons from '../../components/AdminButtons/AdminButtons';
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import ScrollToMainComponent from '../../components/ScrollToMainComponent/ScrollToMainComponent';
import "moment-timezone";
import AddArticle from '../../components/AddArticle/AddArticle';
import { Settings } from "@material-ui/icons";

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
        <ScrollToMainComponent>
          <AdminButtons/>
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
                    <Route path="/settings" component={Settings}/>
                    <Route path="/addArticle" render={props => <AddArticle {...props} add/>}/>
                  </Switch>
                </Container>
              </RouteContainer>
            </PoseGroup>
          <Footer />
          <GlobalStyle />
          <Notification />
        </ScrollToMainComponent>
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
