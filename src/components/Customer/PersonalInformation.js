import React, { Component } from "react";
import { Row, Col, ListGroup, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { update_customer_profile } from "../../actions/customer/customerAuthAction";
class PersonalInformation extends Component {
  constructor(props) {
    super();
    this.state = {
      firstName: props.firstName,
      lastName: props.lastName,
      phoneNumber: props.phoneNumber,
      disableButton: false,
    };
  }
  onChange = (e) => {
    let newInput = e.target.value;
    this.setState({
      [e.target.name]: newInput,
    });
  };

  updateCustomerProfile = async () => {
    this.setState({
      disableButton: true,
    });

    let customer = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
    };
    await this.props.update_customer_profile(customer);
    this.setState({
      disableButton: false,
    });
  };
  render() {
    return (
      <ListGroup>
        <ListGroup.Item>
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
          <h3> Personal Information</h3>
        </ListGroup.Item>
        <ListGroup.Item>
          <Form className="user-info">
            <Row>
              <Col xs={12} sm={6}>
                <Form.Group>
                  <Form.Label>Name </Form.Label>
                  <Form.Control
                    name="firstName"
                    type="text"
                    value={this.state.firstName}
                    onChange={this.onChange}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} sm={6}>
                <Form.Group>
                  <Form.Label> Last Name</Form.Label>
                  <Form.Control
                    name="lastName"
                    type="text"
                    value={this.state.lastName}
                    onChange={this.onChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} lg={6}>
                <Form.Group>
                  <Form.Label> Phone number </Form.Label>
                  <Form.Control
                    value={this.props.phoneNumber}
                    type="text"
                    onChange={this.onChange}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} sm={12} lg={6}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    value={this.props.email}
                    readOnly
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button
              onClick={this.updateCustomerProfile}
              disabled={this.state.disableButton}
              variant="primary"
              type="submit">
              Confirm changes
            </Button>
          </Form>
        </ListGroup.Item>
      </ListGroup>
    );
  }
}

const mapPropsToState = (state) => {
  const { customer } = state;

  return {
    firstName: customer.firstName,
    lastName: customer.lastName,
    email: customer.email,
    phoneNumber: customer.phoneNumber,
  };
};

export default connect(mapPropsToState, {
  update_customer_profile,
})(PersonalInformation);
