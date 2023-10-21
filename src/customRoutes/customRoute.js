import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const CustomRoute = (props) => {
  const [returnedRoute, setReturnedRoute] = useState("");
  useEffect(() => {
    switch (props.condition) {
      case "Customer":
        return setReturnedRoute(
          props.isLogIn && props.role === "Customer" ? (
            <Route {...props} />
          ) : (
            <Redirect to="/" />
          )
        );
      case "Manager":
        return setReturnedRoute(
          props.isLogIn && props.role === "Manager" ? (
            <Route {...props} />
          ) : (
            <Redirect to="/" />
          )
        );
      case "Supervisor":
        return setReturnedRoute(
          props.role === "Supervisor" && props.isLogIn ? (
            <Route {...props} />
          ) : (
            <Redirect to="/" />
          )
        );
      case "Admin":
        return setReturnedRoute(
          props.role === "Admin" && props.isLogIn ? (
            <Route {...props} />
          ) : (
            <Redirect to="/" />
          )
        );
      default:
        return setReturnedRoute(<Route {...props} />);
    }
  }, [props]);
  return <>{returnedRoute}</>;
};

const mapStateToProps = (state) => {
  const { customer, auth } = state;
  return {
    customer,
    role: customer.role,
    isLogIn: auth.isLogIn,
  };
};
export default connect(mapStateToProps, null)(CustomRoute);
