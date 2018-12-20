import React, { Component, Fragment } from "react";
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import ArticleDetails from "../../pages/ArticleDetails";
import HomePage from "../../pages/HomePage";
import Header from "../Header/Header";
import logo from "../../images/logo.svg";
import Article from "../Article/Article";
import GlobalStyle from "../../GlobalStyle";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/Articles" component={ArticleDetails} />
          </Switch>
        </BrowserRouter>
        <GlobalStyle />
      </Fragment>
    );
  }
}

export default App;
