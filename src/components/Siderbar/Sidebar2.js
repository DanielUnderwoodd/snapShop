import React, { useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { ReactComponent as Arrow } from "../../img/back_arrow.svg";
import { connect, useDispatch } from "react-redux";
import shortid from "shortid";
import { ERROR } from "../../actionTypes/public/publicActionTypes";

function Sidebar2({
  prevStep,
  addresses,
  setSelectedAddress,
  selectedAddress,
  nextStep,
}) {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    if (e.target.value === "on") {
      setSelectedAddress(e.target.id);
    }
  };
  const handleprevStep = () => {
    setSelectedAddress("");
    prevStep();
  };

  const handlenextStep = () => {
    if (selectedAddress.length > 0) {
      nextStep();
    } else {
      dispatch({
        type: ERROR,
        payload: "Choose an address",
      });
    }
  };
  return (
    <>
      <Row className="sidebar2-row">
        <Col xs={2} className="back-btn">
          <Arrow onClick={handleprevStep} />
        </Col>
      </Row>
      <hr />

      <div style={{ height: "inherit", marginBottom: "24px" }}>
        <div className="mb-3">
          <Form>
            {addresses.map((address) => {
              return (
                <React.Fragment key={shortid.generate()}>
                  <Form.Check
                    onChange={handleChange}
                    name="group1"
                    type="radio"
                    label={address.location}
                    id={address._id}
                  />
                  <hr />
                </React.Fragment>
              );
            })}
          </Form>
        </div>
      </div>
      <div className="slider-button">
        <Button onClick={() => handlenextStep()}>Next </Button>
      </div>
    </>
  );
}

const mapPropsToState = (state) => {
  const { customer } = state;
  return {
    addresses: customer.address,
  };
};

export default connect(mapPropsToState, {})(Sidebar2);
