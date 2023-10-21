import React, { Component } from "react";
import { connect } from "react-redux";
import {
  search_address,
  search_address_coordinates,
} from "../../actions/customer/customerAuthAction";
import {
  FormControl,
  Modal,
  InputGroup,
  Button,
  ListGroup,
} from "react-bootstrap";

import GoogleMap from "../../config/GoogleMap";
import Location from "./Location";

class MapIr extends Component {
  constructor() {
    super();
    this.state = {
      lat: 60.98267,
      lng: 25.66151,
      place_id: "",
      addresses: [],
      disableButton: false,
      addressList: false,
      location: "",
    };
  }
  submitAddress = (address) => {
    let { latitude, longitude } = address.location;
    let { id, formattedAddress } = address;
    this.setState({
      addressList: false,
      lng: longitude,
      lat: latitude,
      place_id: id,
      location: formattedAddress,
    });
  };

  searchAddress = async (e) => {
    let location = e.target.value;

    await this.setState((preState) => ({
      ...preState,
      location,
    }));

    let address = {
      location,
      // $filter: filter,
    };

    if (location !== "" && location.trim().length !== 0) {
      const result = await this.props.search_address(address);
      let { error, addresses } = result;
      if (error !== true) {
        this.setState({
          addresses,
          addressList: true,
        });
      }
    } else {
      this.setState({
        addresses: [],
        addressList: false,
      });
    }
  };
  handle = ({ lat, lng }) => {
    this.setState({
      lng,
      lat,
      addressList: false,
    });
  };
  showSelectedAddress = async () => {
    let { lat, lng } = this.state;
    this.setState({
      disableButton: true,
    });
    let coordinates = {
      lat,
      lng,
    };
    const result = await this.props.search_address_coordinates(coordinates);
    this.setState({
      disableButton: false,
    });
    if (!result.error) {
      let { lng, lat } = result.address.geometry.location;
      let { formatted_address } = result.address;
      let data = {
        lng,
        lat,
        address: formatted_address,
      };
      this.props.updateLatLngAddress(data);
      this.props.changeCurrentStep(1);
    }
  };

  render() {
    let { lat, lng, location } = this.state;
    if (this.props.currentStep !== 1) {
      return null;
    } else {
      return (
        <div>
          <Modal.Body>
            <InputGroup className="search-bar  map-search">
              <FormControl
                placeholder="Search region or city"
                aria-label="Default"
                value={location}
                aria-describedby="inputGroup-sizing-default"
                onChange={this.searchAddress}
              />
              <InputGroup.Prepend>
                <Button
                  className="map-confirm-btn"
                  disabled={this.state.disableButton}
                  onClick={this.showSelectedAddress}>
                  Confirm
                </Button>
              </InputGroup.Prepend>
            </InputGroup>
            <ListGroup
              className="address-list"
              style={{
                display: this.state.addressList ? "block" : "none",
              }}>
              {this.state.addresses.map((address, index) => (
                <ListGroup.Item key={index}>
                  <div style={{ cursor: "pointer" }}>
                    <div onClick={() => this.submitAddress(address)}>
                      <span> {address.formattedAddress}</span>
                    </div>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <div style={{ height: "50vh", width: "100%" }}>
              <GoogleMap onClick={this.handle} centerLocation={{ lat, lng }}>
                <Location lat={lat} lng={lng} />
              </GoogleMap>
            </div>
          </Modal.Body>
        </div>
      );
    }
  }
}
export default connect(null, {
  search_address,
  search_address_coordinates,
})(MapIr);
