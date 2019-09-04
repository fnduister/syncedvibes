import React from "react";
import { Fragment } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { isLoaded } from "react-redux-firebase";

function PrivateRoute({ profile, component: Component, rolei ,...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          !profile.isEmpty && profile.role === rolei ? (
            <Component {...props} {...rest}/>
          ) : (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          )
        }
      />
    );
  }

export default withRouter(PrivateRoute);
