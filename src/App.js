import React, { Component } from "react";
import MediaQuery from "react-responsive";
import CustomRoute from "./customRoutes/customRoute";
import MainHeader from "./components/header/MainHeader";
import Profile from "./components/Customer/Profile";
import MainSection from "./components/mainSection/MainSection";
import { connect } from "react-redux";
import { error_cleaner, success_cleaner } from "./actions/public/publicAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProductPage from "./components/ProductPage/ProductPage";
import NotFound from "./components/NotFound";
import { Switch } from "react-router-dom/cjs/react-router-dom";
import Footer from "./components/Footer";
import SiderbarProvider from "./provider/SidebarProvider";

class App extends Component {
  componentDidUpdate() {
    if (this.props.errors) {
      toast.error(this.props.errors, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      this.props.error_cleaner();
    } else if (this.props.success) {
      toast.success(this.props.success, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      this.props.success_cleaner();
    }
  }

  render() {
    return (
      <div>
        <SiderbarProvider>
          <MainHeader />
          <Switch>
            <CustomRoute
              condition="Customer"
              exact
              path="/customer/profile"
              component={Profile}
            />
            <CustomRoute
              exact
              path="/products/:productId"
              component={ProductPage}
            />
            <CustomRoute exact path="/" component={MainSection} />\{" "}
            <CustomRoute component={NotFound} />
          </Switch>
          <MediaQuery maxWidth={992}>
            <Footer />
          </MediaQuery>
        </SiderbarProvider>

        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

const mapPropsToState = (state) => {
  const { auth, error, success } = state;

  return {
    isLogIn: auth.isLogIn,
    errors: error.newError.message,
    success: success.newSucess.message,
  };
};

export default connect(mapPropsToState, {
  error_cleaner,
  success_cleaner,
})(App);
