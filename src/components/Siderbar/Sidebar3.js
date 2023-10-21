import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { ReactComponent as Arrow } from "../../img/back_arrow.svg";
import { useDispatch } from "react-redux";
import { ERROR } from "../../actionTypes/public/publicActionTypes";

export default function Sidebar3({
  prevStep,
  payment,
  setPayment,
  setSelectedAddress,
  submitCheckOut,
}) {
  const dispatch = useDispatch();
  const checkOut = () => {
    if (payment.length > 0) {
      submitCheckOut();
    } else {
      dispatch({
        type: ERROR,
        payload: "Choose one payment method",
      });
    }
  };
  const handleprevStep = () => {
    setSelectedAddress("");
    setPayment("");
    prevStep();
  };

  const handleChange = (e) => {
    setPayment(e.target.name);
  };

  return (
    <>
      <Row className="sidebar2-row">
        <Col xs={2} className="back-btn">
          <Arrow onClick={() => handleprevStep()} />
        </Col>
      </Row>
      <hr />

      <div style={{ height: "inherit", marginBottom: "24px" }}>
        <div className="mb-3">
          <Form>
            <Form.Check
              onChange={handleChange}
              name="unpay"
              type="radio"
              label="unpay"
            />
            <hr />
            <Form.Check
              onChange={handleChange}
              name="pay"
              type="radio"
              label="pay"
              disabled
            />
          </Form>
        </div>
      </div>
      <hr />

      <div className="slider-button">
        <Button onClick={checkOut}>Check out </Button>
      </div>
    </>
  );
}
