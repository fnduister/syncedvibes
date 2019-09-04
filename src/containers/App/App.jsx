import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ArticleDetails from "../../pages/ArticleDetails";
import posed, { PoseGroup } from "react-pose";
import HomePage from "../../pages/HomePage";
import Header from "../Header/Header";
import Notification from "../../components/Notification/Notification";
import { GlobalStyle, viewport } from "../../GlobalStyle";
import Footer from "../Footer/Footer";
import Grid from "@material-ui/core/Grid";
import testFirebase from "../../components/testComponent/testFirebase";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import withSizes from "react-sizes";
import AdminButtons from "../../components/AdminButtons/AdminButtons";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import ScrollToMainComponent from "../../components/ScrollToMainComponent/ScrollToMainComponent";
import "moment-timezone";
import AddArticle from "../../components/AddArticle/AddArticle";
import { Settings } from "@material-ui/icons";
import ManageUsers from "../../pages/ManageUsers/ManageUsers";
import CustomCard from "../../components/CustomCard/CustomCard";

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 350, beforeChildren: true },
  exit: { opacity: 0 }
});

const App = ({ auth, profile, onMobile }) => {
  return (
    <Router>
      <ScrollToMainComponent>
        {!profile.isEmpty && profile.role === "admin" && <AdminButtons />}
        <Header
        // onMobile={this.props.onMobile}
        />
        <PoseGroup>
          <RouteContainer key="allo">
            <Grid
              container
              alignItems="center"
              direction="column"
              justify="center"
            >
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => <HomePage {...props} onMobile={onMobile} />}
                />
                <Route
                  path="/article/:articleId"
                  render={props => (
                    <ArticleDetails {...props} onMobile={onMobile} />
                  )}
                />
                <PrivateRoute rolei="admin" profile={profile}>
                  <Route
                    path="/ManageUsers"
                    render={props =>
                      !profile.isEmpty ? <ManageUsers {...props} /> : null
                    }
                  />
                </PrivateRoute>
                <CustomCard>
                  <Route path="/signup" component={SignUp} />
                  {/* <Route path="/settings" component={Settings} /> */}
                  <PrivateRoute
                    path="/addArticle"
                    rolei="admin"
                    profile={profile}
                    component={<AddArticle add />}
                  />
                  <Route path="/login" component={Login} />
                </CustomCard>
              </Switch>
            </Grid>
          </RouteContainer>
        </PoseGroup>
        <Footer />
        <GlobalStyle />
        <Notification />
      </ScrollToMainComponent>
    </Router>
  );
};

const mapProps = ({ firebase: { auth, profile } }, ownProps) => ({
  auth,
  profile
});

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
