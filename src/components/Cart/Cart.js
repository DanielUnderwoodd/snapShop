import React from "react";
import { Col, Button } from "react-bootstrap";
import { ReactComponent as CartLogo } from "../../img/cart.svg";

export default function Cart({ toggleSidebar, cart }) {
  return (
    <>
      <Col className="col-align">
        <Button onClick={toggleSidebar} className="goods">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cart.length}
          </span>
          Cart
          <CartLogo />
        </Button>
      </Col>
    </>
  );
}
