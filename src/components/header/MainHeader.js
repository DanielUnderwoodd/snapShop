import React, { Component } from "react";
import Header from "./header";
import { Container } from "react-bootstrap";
import {
  log_out_customer,
  clean,
} from "../../actions/customer/customerAuthAction";
import { connect } from "react-redux";
import "../../componentsCss/searchBar.css";

class MainHeader extends Component {
  LogOut = () => {
    this.props.log_out_customer();
  };
  clean = () => {
    this.props.clean();
  };
  render() {
    return (
      <div>
        <Container fluid className="header-backgorund-color">
          <div className="container-resize" style={{ marginBottom: "50px" }}>
            <Header />
          </div>
        </Container>
      </div>
    );
  }
}

export default connect(null, {
  log_out_customer,
  clean,
})(MainHeader);
