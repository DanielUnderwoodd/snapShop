import React, { Component, createRef } from "react";
import { Button, Popover, Overlay } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { log_out_customer } from "../../actions/customer/customerAuthAction";
import "../../componentsCss/toastDropDown.css";

class Authenticate extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      target: null,
      rootClose: false,
    };
    this.overLayRef = createRef();
  }
  toggleShowButton = (e) => {
    const event = e.target;
    this.setState((preState) => {
      return {
        ...preState,
        show: !preState.show,
        target: event,
      };
    });
  };
  onHide = () => {
    if (this.state.show) {
      this.setState((preState) => {
        return {
          ...preState,
          show: !preState.show,
          onHide: true,
        };
      });
    }
  };
  logOut = async () => {
    await this.props.log_out_customer();
    window.location.reload(true);
  };
  render() {
    return (
      <div ref={this.overLayRef} className="col col-align">
        <Button className="register" onClick={this.toggleShowButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16">
            <g id="account-icon" transform="translate(-453 -562)">
              <path
                id="Icon"
                d="M0,16V14c0-2.2,3.6-4,8-4s8,1.8,8,4v2ZM4,4A4,4,0,1,1,8,8,4,4,0,0,1,4,4Z"
                transform="translate(453 562)"
                fill="#ff6a00"
              />
            </g>
          </svg>
          {this.props.firstName + this.props.lastName}
        </Button>
        <Overlay
          show={this.state.show}
          target={this.state.target}
          placement="bottom"
          container={this.overLayRef.current}
          containerPadding={20}
          onHide={this.onHide}
          rootClose
          rootCloseEvent="click">
          <Popover id="popover-contained">
            <Popover.Title as="h3">
              {this.props.firstName + "  " + this.props.lastName}
            </Popover.Title>
            <Popover.Content>
              <ul className="popover-footer">
                <li>
                  <Link to="/customer/profile">Profile</Link>
                </li>

                <li>
                  <span onClick={this.logOut}>Log out</span>
                </li>
              </ul>
            </Popover.Content>
          </Popover>
        </Overlay>
      </div>
    );
  }
}

const mapPropsToState = (state) => {
  const { customer } = state;

  return {
    firstName: customer.firstName,
    lastName: customer.lastName,
    balance: customer.balance,
  };
};

export default connect(mapPropsToState, {
  log_out_customer,
})(Authenticate);
