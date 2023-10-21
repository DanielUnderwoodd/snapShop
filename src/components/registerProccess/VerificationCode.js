import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { send_code } from "../../actions/customer/customerRegisterAction";
import "../../componentsCss/VerificationCode.css";

class VerificationCode extends Component {
  constructor() {
    super();
    this.state = {
      disableButton: false,
    };
  }
  errorHandler(e) {
    e.target.setCustomValidity("email format is not correct");
  }

  sendCodeHandler = async (e) => {
    this.setState({
      disableButton: true,
    });
    e.preventDefault();
    let email = document.getElementById("email").value;
    try {
      let result = await this.props.send_code(email);
      this.setState({
        disableButton: false,
      });

      if (!result.error) {
        this.props.setEmail(email);
        this.props.changeCurrentStep(1);
      }
      if (result.isRegistered !== null) {
        this.props.setIsRegistered(result.isRegistered);
      }
    } catch (err) {}
  };
  render() {
    if (this.props.currentStep !== 0) {
      return null;
    } else {
      return (
        <div>
          <Modal.Header closeButton className="modal-header">
            <Modal.Title
              id="contained-modal-title-vcenter"
              className="modal-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
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
              <h4>Login/Register</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Control
                  id="email"
                  type="text"
                  placeholder="Enter your email address"
                />
              </Form.Group>
              <div className="text-center">
                <Button
                  disabled={this.state.disableButton}
                  onClick={this.sendCodeHandler}
                  className="submit-btn-code-form"
                  type="submit">
                  Confirm
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </div>
      );
    }
  }
}

const mapPropsToState = (state) => {
  const { auth } = state;
  return {
    isRegistered: auth.isRegistered,
  };
};

export default connect(mapPropsToState, {
  send_code,
})(VerificationCode);
