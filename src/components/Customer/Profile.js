import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Address from "../Address/Address";
import NavigationSideBar from "./NavigationSideBar";
import PersonalInformation from "./PersonalInformation";
import AddressFooterBar from "../Address/AddressFooterBar";
import "../../componentsCss/profileSection.css";
export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      addressBar: false,
      editAddressBar: false,
      locationId: null,
      currentAddress: {},
    };
  }

  hideAddressBar = () => {
    this.setState({
      addressBar: false,
      editAddressBar: false,
    });
  };
  showAddressBar = () => {
    this.setState({
      addressBar: true,
    });
  };
  showEditAddressBar = (currentAddress) => {
    this.setState({
      editAddressBar: true,
      addressBar: true,
      currentAddress,
    });
  };

  render() {
    return (
      <div>
        <Container className="profile-section">
          <Row>
            <Col md={4}>
              <NavigationSideBar />
            </Col>
            <Col xs={12} md={8}>
              <PersonalInformation />
              <AddressFooterBar
                showEditAddressBar={this.showEditAddressBar}
                showAddressBar={this.showAddressBar}
              />
            </Col>
          </Row>
          <Address
            address={this.state.currentAddress}
            editAddressBar={this.state.editAddressBar}
            show={this.state.addressBar}
            onHide={this.hideAddressBar}
          />
        </Container>
      </div>
    );
  }
}
