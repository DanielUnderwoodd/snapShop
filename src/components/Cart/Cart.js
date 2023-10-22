import React, { useContext } from "react";
import { Col, Button } from "react-bootstrap";
import { ReactComponent as CartLogo } from "../../img/cart.svg";
import {
  SiderbarContext,
  SiderbarContextDispatchContext,
} from "../../context/SidebarContext";

export default function Cart({ toggleSidebar, cart }) {
  const state = useContext(SiderbarContext);
  const dispatch = useContext(SiderbarContextDispatchContext);

  return (
    <>
      <Col className="col-align">
        <Button
          onClick={() =>
            dispatch({
              type: "SET_OPEN",
              payload: !state.isOpen,
            })
          }
          className="goods">
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
