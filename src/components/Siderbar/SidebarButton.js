import React from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

import CartButton from "../Cart/CartButton";
import { change_cart } from "../../actions/public/publicAction";
import shortid from "shortid";
import MemoizedCartImage from "../Cart/CartImage";

function SidebarButton({ product, cart, change_cart }) {
  const cartChange = (type) => {
    let { id, text } = product;
    change_cart({
      type,
      cart,
      id,
      price,
      img,
      text,
    });
  };
  let { price, quantity, img } = product;
  return (
    <>
      {" "}
      <Row>
        <Col xs={4}>
          <MemoizedCartImage img={img} />
        </Col>
        <Col xs={5}> {price} euro</Col>
      </Row>
      <Row>
        <Col xs={7} style={{ margin: "auto", direction: "initial" }}>
          <CartButton quantity={quantity} cartChange={cartChange} />
        </Col>
      </Row>
    </>
  );
}

const mapStateToProps = (state) => ({
  cart: state._public.cart, // Replace 'count' with your actual state property
});

export default connect(mapStateToProps, { change_cart })(SidebarButton);
