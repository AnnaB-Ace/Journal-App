import React from "react";
import { Redirect, Route } from "react-router";
import PropTypes from "prop-types";

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  //   console.log(rest.location.pathname); me muestra la ultima pagina visitada
  
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/auth/login" />
      }
    />
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
