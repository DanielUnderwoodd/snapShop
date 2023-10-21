import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import VerificationCode from "./VerificationCode";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import "../../componentsCss/VerificationCode.css";

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      currentStep: 0,
      email: null,
      isRegistered: null,
    };
  }
  changeCurrentStep = (selectedStep) => {
    if (selectedStep === 1) {
      this.setState((preState) => {
        return {
          ...preState,
          currentStep: preState.currentStep + 1,
        };
      });
    } else {
      this.setState((preState) => {
        return {
          ...preState,
          currentStep: preState.currentStep - 1,
        };
      });
    }
  };
  setEmail = (email) => {
    this.setState((preState) => {
      return {
        ...preState,
        email,
      };
    });
  };
  setIsRegistered = (isRegistered) => {
    this.setState((preState) => {
      return {
        ...preState,
        isRegistered,
      };
    });
  };
  render() {
    return (
      <div>
        <Modal
          show={this.props.show}
          onHide={this.props.onHide}
          size="md"
          aria-labelledby="contained-modal-title-vcenter">
          <VerificationCode
            changeCurrentStep={this.changeCurrentStep}
            currentStep={this.state.currentStep}
            setEmail={this.setEmail}
            setIsRegistered={this.setIsRegistered}
          />
          {this.state.isRegistered ? (
            <SignIn
              changeCurrentStep={this.changeCurrentStep}
              currentStep={this.state.currentStep}
              email={this.state.email}
              isRegistered={this.state.isRegistered}
            />
          ) : (
            <SignUp
              changeCurrentStep={this.changeCurrentStep}
              currentStep={this.state.currentStep}
              email={this.state.email}
              isRegistered={this.state.isRegistered}
            />
          )}
        </Modal>
      </div>
    );
  }
}
const mapPropsToState = (state) => {
  const { auth } = state;
  return {
    isRegistered: auth.isRegistered,
  };
};

export default connect(mapPropsToState, {})(RegisterForm);
