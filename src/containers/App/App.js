import React, { Component, Fragment, createRef } from "react";
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
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


const Container = styled(Grid)`
  flex-grow: 1;
`;

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

  changeSticky = sticky => {
    console.log("changing sticky");
    this.setState({
      stickyNav: sticky
    });
  };

  componentDidMount() {
    this.setState({
      top: this.navRef.offsetTop,
      height: this.navRef.offsetHeight,
      maxHeight: window.innerHeight,
      stickyNav: false
    });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    console.log({
      scroll: this.state.scroll,
      height: this.state.height,
      maxHeight: this.state.maxHeight,
      top: this.state.top
    });
    if (this.state.height + this.state.scroll > this.state.maxHeight) {
      if (this.state.stickyNav === false) this.changeSticky(true);
    } else {
      if (this.state.stickyNav === true) this.changeSticky(false);
    }
  }

  render() {
    return (
      <Fragment>
        <Header
          stickyNav={this.state.stickyNav}
          navRef={el => (this.navRef = el)}
        />
        <Container
          container
          spacing={16}
          alignItems="center"
          direction="column"
          justify="center"
        >
          <MainContent style={{ color: "#000" }}>
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
