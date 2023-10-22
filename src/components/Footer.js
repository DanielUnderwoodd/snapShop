import React, { useContext } from "react";
import "../componentsCss/Footer.css";
import { ReactComponent as HomeLogo } from "../img/home.svg";
import { ReactComponent as CartLogo } from "../img/cart.svg";
import { useSelector } from "react-redux";

import {
  SiderbarContext,
  SiderbarContextDispatchContext,
} from "../context/SidebarContext";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  const state = useContext(SiderbarContext);
  const dispatch = useContext(SiderbarContextDispatchContext);
  const cart = useSelector((state) => state._public.cart);
  return (
    <footer className="footer">
      <Row>
        <Col>
          {" "}
          <div className="vertical-stack">
            <CartLogo
              onClick={() =>
                dispatch({
                  type: "SET_OPEN",
                  payload: !state.isOpen,
                })
              }
            />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
            </span>
            <span>Cart</span>
          </div>
        </Col>

        <Col>
          <div className="vertical-stack">
            <HomeLogo />
            <Link to="/">
              <span>Home</span>
            </Link>
          </div>
        </Col>
      </Row>
    </footer>
  );
}
