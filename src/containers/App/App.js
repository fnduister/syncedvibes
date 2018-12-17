import React, { Component } from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";
import ArticleDetails from "../../pages/ArticleDetails";
import Homepage from "../../pages/HomePage";
import Header from "../Header/Header";
import logo from "../../images/logo.svg";
import "./App.css";
import Article from "../Article/Article";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route path="/" component={Homepage} />
          <Route path="/article" component={ArticleDetails} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
