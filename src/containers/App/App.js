import React, { Component, Fragment } from "react";
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import ArticleDetails from "../../pages/ArticleDetails";
import HomePage from "../../pages/HomePage";
import Header from "../Header/Header";
import { Parallax, ParallaxLayer } from "react-spring/addons";
import { MainContent } from "./styled";
import logo from "../../images/logo.svg";
import Article from "../Article/Article";
import { GlobalStyle } from "../../GlobalStyle";
import Footer from "../Footer/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleScroll = () => {
    this.setState({
      scroll: window.scrollY
    });
  };

  componentDidMount() {
    const el = document.querySelectorAll("#merde");
    this.setState({ top: el.offsetTop, height: el.offsetHeight });
    window.addEventListener("scroll", this.handleScroll);
    console.log({ el });
  }

  // componentDidUpdate() {
  //   // console.log({scroll: this.state.scroll,height: this.state.height});

  // }

  render() {
    return (
      <Fragment>
        <Header />
        <MainContent style={{ color: "#000" }}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/Articles" component={ArticleDetails} />
          </Switch>
        </MainContent>
        <Footer />

        <GlobalStyle />
      </Fragment>
    );
  }
}

export default App;
