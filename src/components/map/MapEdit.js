import React, { Component } from "react";
import { connect } from "react-redux";
import GoogleMap from "../../config/GoogleMap";
import Location from "./Location";
import { Row, Col, Form, Button } from "react-bootstrap";
import { edit_address } from "../../actions/customer/customerAuthAction";

class MapEdit extends Component {
  constructor(props) {
    super();
    let { phoneNumber, location, lat, lng, _id } = props.currentAddress;
    this.state = {
      phoneNumber,
      location,
      lat,
      lng,
      _id,
      disableButton: false,
    };
  }

  onChange = (e) => {
    let newInput = e.target.value;
    this.setState({
      [e.target.name]: newInput,
    });
  };
  editAddress = async () => {
    this.setState({
      disableButton: true,
    });
    let newAddress = {
      location: this.state.location,
      phoneNumber: this.state.phoneNumber,
      _id: this.state._id,
    };
    const result = await this.props.edit_address(newAddress);
    this.setState({
      disableButton: false,
    });
    if (!result.error) {
      this.props.onHide();
    }
  };

  render() {
    let { lat, lng } = this.state;

    return (
      <div>
        <Row>
          <Col>
            <Row>
              <Form.Group>
                <Form.Label>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15.0075 11.535C14.085 11.535 13.1925 11.385 12.36 11.115C12.0975 11.025 11.805 11.0925 11.6025 11.295L10.425 12.7725C8.3025 11.76 6.315 9.8475 5.2575 7.65L6.72 6.405C6.9225 6.195 6.9825 5.9025 6.9 5.64C6.6225 4.8075 6.48 3.915 6.48 2.9925C6.48 2.5875 6.1425 2.25 5.7375 2.25H3.1425C2.7375 2.25 2.25 2.43 2.25 2.9925C2.25 9.96 8.0475 15.75 15.0075 15.75C15.54 15.75 15.75 15.2775 15.75 14.865V12.2775C15.75 11.8725 15.4125 11.535 15.0075 11.535Z"
                      fill="black"
                    />
                  </svg>
                  شماره تماس گیرنده
                </Form.Label>
                <Form.Control
                  name="phoneNumber"
                  type="text"
                  value={this.state.phoneNumber}
                  onChange={this.onChange}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group>
                <Form.Label>
                  <svg
                    width="9"
                    height="16"
                    viewBox="0 0 19 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.89458 0C4.93214 0 0.894974 4.048 0.894974 9.02316C0.894974 13.8122 9.06047 25.001 9.40815 25.4748L9.73264 25.9175C9.77058 25.9696 9.83101 26 9.89458 26C9.95914 26 10.0192 25.9696 10.0575 25.9175L10.3818 25.4748C10.7297 25.001 18.895 13.8122 18.895 9.02316C18.895 4.048 14.8572 0 9.89458 0ZM9.89458 5.79108C11.6726 5.79108 13.1185 7.24066 13.1185 9.02316C13.1185 10.8047 11.6726 12.2552 9.89458 12.2552C8.11757 12.2552 6.67068 10.8047 6.67068 9.02316C6.67068 7.24066 8.11751 5.79108 9.89458 5.79108Z"
                      fill="black"
                    />
                  </svg>
                  آدرس
                </Form.Label>
                <Form.Control
                  rows={3}
                  as="textarea"
                  name="location"
                  type="text"
                  value={this.state.location}
                  onChange={this.onChange}
                />
              </Form.Group>
              <Button
                className="default-btn"
                disabled={this.state.disableButton}
                onClick={this.editAddress}>
                ویرایش آدرس
              </Button>
            </Row>
          </Col>
          <Col>
            <GoogleMap centerLocation={{ lat, lng }}>
              <Location lat={lat} lng={lng} />
              <button
                className={
                  this.state.BackBtn
                    ? " change-location-btn showBtn"
                    : "change-location-btn hideBtn"
                }
                onClick={() => this.props.changeCurrentStep(0)}>
                change location
              </button>
            </GoogleMap>
          </Col>
        </Row>
      </div>
    );
  }
}
const mapPropsToState = (state) => {
  const { customer } = state;
  return {
    address: customer.address,
  };
};
export default connect(mapPropsToState, {
  edit_address,
})(MapEdit);
