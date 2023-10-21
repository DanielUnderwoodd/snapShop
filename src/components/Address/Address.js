import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import MapIr from "../map/MapIr";
import MapConfirm from "../map/MapConfirm";
import MapEdit from "../map/MapEdit";

export default class Address extends Component {
  constructor() {
    super();
    this.state = {
      currentStep: 1,
      selectedLat: 0,
      selectedlng: 0,
      selectedAddress: "",
    };
  }
  updateLatLngAddress = (data) => {
    this.setState({
      selectedLat: data.lat,
      selectedlng: data.lng,
      selectedAddress: data.address,
    });
  };

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

  render() {
    return (
      <div>
        <Modal
          show={this.props.show}
          onHide={this.props.onHide}
          size="md"
          aria-labelledby="contained-modal-title-vcenter">
          <Modal.Header closeButton className="search-address-header">
            <div>
              <svg
                width="14"
                height="22"
                viewBox="0 0 24 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.9995 0C5.8764 0 0.894974 4.98215 0.894974 11.1054C0.894974 16.9996 10.9703 30.7705 11.3993 31.3536L11.7997 31.8985C11.8465 31.9626 11.9211 32 11.9995 32C12.0792 32 12.1532 31.9626 12.2005 31.8985L12.6007 31.3536C13.0299 30.7705 23.105 16.9996 23.105 11.1054C23.105 4.98215 18.1228 0 11.9995 0ZM11.9995 7.12748C14.1934 7.12748 15.9775 8.91158 15.9775 11.1054C15.9775 13.2981 14.1934 15.0834 11.9995 15.0834C9.80687 15.0834 8.02157 13.2981 8.02157 11.1054C8.02157 8.91158 9.80679 7.12748 11.9995 7.12748Z"
                  fill="#FF6A00"
                />
              </svg>
              Add New Address
            </div>
          </Modal.Header>
          {this.props.editAddressBar ? (
            <MapEdit
              currentAddress={this.props.address}
              onHide={this.props.onHide}
            />
          ) : null}
          {this.props.editAddressBar ? null : (
            <MapIr
              changeCurrentStep={this.changeCurrentStep}
              currentStep={this.state.currentStep}
              updateLatLngAddress={this.updateLatLngAddress}
            />
          )}

          {this.state.selectedAddress || !this.state.selectedAddress ? (
            <MapConfirm
              changeCurrentStep={this.changeCurrentStep}
              currentStep={this.state.currentStep}
              lat={this.state.selectedLat}
              lng={this.state.selectedlng}
              address={this.state.selectedAddress}
              onHide={this.props.onHide}
            />
          ) : null}
        </Modal>
      </div>
    );
  }
}
