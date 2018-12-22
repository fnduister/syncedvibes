import React, { Component, Fragment } from "react";
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import ArticleDetails from "../../pages/ArticleDetails";
import HomePage from "../../pages/HomePage";
import Header from "../Header/Header";
import { MainContent } from "./styled";
import logo from "../../images/logo.svg";
import Article from "../Article/Article";
import { GlobalStyle } from "../../GlobalStyle";
import Footer from "../Footer/Footer";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <MainContent style={{color:'#000'}}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/Articles" component={ArticleDetails} />
          </Switch>
        </MainContent>
        <Footer/>
        <GlobalStyle />
      </Fragment>
    );
  }
}

export default App;
