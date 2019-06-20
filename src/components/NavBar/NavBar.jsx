import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { compose } from "redux";
import { connect } from "react-redux";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Cancel from "@material-ui/icons/Cancel";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter } from "react-router";
import { withFirebase, isLoaded, isEmpty } from "react-redux-firebase";
import SearchIcon from "@material-ui/icons/Search";
import {
  AppBarStyled,
  HomePageButton,
  ToolbarStyled,
  EmptyAccount,
  AvatarStyled,
  TabStyled,
  IconBox,
  AvatarProgress,
  AvatarContainer,
  SearchContainer,
  TypographyStyled,
  HeaderWrapper,
  Search,
  SearchIconStyled,
  InputBaseStyled
} from "./styled";
import { FirstPage } from "@material-ui/icons";

const NavBar = ({
  withIcon,
  withSearch,
  navRef,
  firebase,
  toggleMenu,
  withTabs,
  history,
  zIndex,
  value,
  position,
  profile,
  auth,
  background,
  ...props
}) => {
  const [mouseStatus, toggleMouseStatus] = useState(false);

  const changeMouseStatus = () => {
    toggleMouseStatus(prev => !prev);
  };

  const signOut = () => {
    firebase.logout();
    history.push("/");
  };

  const signIn = () => {
    history.push("/login");
  };
  return (
    <HeaderWrapper ref={navRef}>
      <AppBarStyled position={position} background={background}>
        <ToolbarStyled withicon={withIcon}>
          <HomePageButton component={Link} to="/">
            SyncedVibes
          </HomePageButton>
          <SearchContainer>
            <Search>
              <SearchIconStyled>
                <SearchIcon />
              </SearchIconStyled>
              <InputBaseStyled placeholder="Search…" />
            </Search>
            {isLoaded(auth) ? (
              <AvatarContainer
                onMouseEnter={changeMouseStatus}
                onMouseLeave={changeMouseStatus}
              >
                {isEmpty(auth) ? (
                  <EmptyAccount
                    status={mouseStatus}
                    fontSize="large"
                    onClick={signIn}
                  />
                ) : mouseStatus ? (
                  <Cancel onClick={signOut} fontSize="large" />
                ) : profile.avatarUrl ? (
                  <AvatarStyled alt="User Avatar" src={profile.avatarUrl} />
                ) : (
                        <AvatarStyled>{profile.avatar}</AvatarStyled>
                      )}
              </AvatarContainer>
            ) : (
                <AvatarProgress size={26} />
              )}
          </SearchContainer>
        </ToolbarStyled>
      </AppBarStyled>
    </HeaderWrapper>
  );
};

const enhance = compose(
  withRouter,
  withFirebase,
  connect(({ firebase: { profile, auth } }) => ({
    profile,
    auth
  }))
);

export default enhance(NavBar);
