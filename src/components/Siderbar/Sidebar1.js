import React, { useContext, useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { ReactComponent as Arrow } from "../../img/back_arrow.svg";
import { ReactComponent as Delete } from "../../img/delete.svg";
import { useDispatch } from "react-redux";

import SidebarButton from "./SidebarButton";
import {
  SiderbarContext,
  SiderbarContextDispatchContext,
} from "../../context/SidebarContext";
import shortid from "shortid";
import { CLEAN_CART } from "../../actionTypes/customer/customerActionTypes";

export default function Sidebar1({ data, setLoginModal, isLogIn, nextStep }) {
  const state = useContext(SiderbarContext);
  const contextDispatch = useContext(SiderbarContextDispatchContext);

  useEffect(() => {
    let price = data.reduce(
      (accumulator, currentObject) =>
        Math.round(accumulator + currentObject.price * currentObject.quantity),
      0
    );
    setPrice(price);
  }, [data]);
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const clean = () => {
    dispatch({
      type: CLEAN_CART,
    });
  };
  const setLoginCLose = () => {
    contextDispatch({
      type: "SET_OPEN",
      payload: false,
    });
    setLoginModal();
  };
  return (
    <>
      <Row>
        <Col xs={2}>
          <Arrow
            onClick={() => {
              contextDispatch({
                type: "SET_OPEN",
                payload: !state.isOpen,
              });
            }}
          />{" "}
        </Col>
        <Col xs={8}>My cart ({data.length})</Col>
        <Col xs={2}>
          <Delete onClick={clean} />
        </Col>
      </Row>
      <hr />
      <div style={{ height: "inherit", marginBottom: "24px" }}>
        {data.map((product, index) => {
          return (
            <div key={shortid.generate()}>
              {index === data.length - 1 ? (
                <div className="adjust-last-element">
                  <SidebarButton product={product} key={shortid.generate()} />
                </div>
              ) : (
                <>
                  <SidebarButton product={product} key={shortid.generate()} />{" "}
                  <hr />{" "}
                </>
              )}
            </div>
          );
        })}
      </div>
      <div className="slider-button">
        <span>{price}</span>
        {isLogIn ? (
          <Button onClick={() => nextStep()}>Next </Button>
        ) : (
          <Button onClick={setLoginCLose}>Login/Register </Button>
        )}
      </div>
    </>
  );
}
