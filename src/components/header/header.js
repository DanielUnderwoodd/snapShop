import React, { Component } from "react";
import MediaQuery from "react-responsive";
import RegisterForm from "../registerProccess/RegisterForm";
import Authenticate from "./Authenticate";
import Sidebar from "../Siderbar/Sidebar";
import SearchProvider from "../../provider/SearchProvider";
import { ReactComponent as ProfileLogo } from "../../img/profile.svg";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { connect } from "react-redux";
import { Col, Row, Form, InputGroup, Button } from "react-bootstrap";
import "../../componentsCss/header.css";
import SidebarContent from "../Siderbar/SidebarContent";
import SearchBar from "./SearchBar";
import Cart from "../Cart/Cart";
import { SiderbarContext } from "../../context/SidebarContext";
class Header extends Component {
  static contextType = SiderbarContext;
  constructor() {
    super();
    this.state = {
      modalShow: false,
      didUpdate: false,
      overflow: true,
    };
  }
  setModalShow = () => {
    this.setState({
      modalShow: true,
    });
  };
  setModalHide = () => {
    this.setState({
      modalShow: false,
    });
  };

  componentDidUpdate() {
    if (this.state.didUpdate === false) {
      if (this.props.isLogIn) {
        this.setState({
          modalShow: false,
          didUpdate: true,
        });
      }
    }
  }

  render() {
    let { isOpen } = this.context;
    let { cart } = this.props;
    return (
      <div className="header-navabr">
        {cart.length > 0 && (
          <Sidebar isOpen={isOpen}>
            <SidebarContent setLoginModal={this.setModalShow} />
          </Sidebar>
        )}
        <Row className="align-items-center">
          <MediaQuery minWidth={896}>
            <Cart cart={cart} />
          </MediaQuery>

          {this.props.isLogIn ? (
            <Authenticate />
          ) : (
            <>
              <MediaQuery minWidth={794}>
                <Col className="col-align">
                  <Button className="register" onClick={this.setModalShow}>
                    <ProfileLogo />
                    Login/Register
                  </Button>
                </Col>
              </MediaQuery>
              <MediaQuery maxWidth={794}>
                <ProfileLogo onClick={this.setModalShow} />
              </MediaQuery>
            </>
          )}
          <Col className="col-align" xs={10} sm={6} md={6}>
            <Form inline className="search-bar d-inline w-50">
              <InputGroup>
                <SearchProvider>
                  <SearchBar />
                </SearchProvider>
              </InputGroup>
            </Form>
          </Col>
          <MediaQuery minWidth={576}>
            <Col>
              <Logo />
            </Col>
          </MediaQuery>
        </Row>
        <RegisterForm show={this.state.modalShow} onHide={this.setModalHide} />
      </div>
    );
  }
}
const mapPropsToState = (state) => {
  const { auth, _public } = state;
  return {
    isLogIn: auth.isLogIn,
    cart: _public.cart,
  };
};

export default connect(mapPropsToState, {})(Header);
