import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";

function PrivateRoute({ profile, component: Component, rolei ,...rest }) {
  console.log('profile', profile.role);
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
