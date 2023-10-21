import React, { useState } from "react";
import "../../componentsCss/SliderContent.css";
import { connect } from "react-redux";
import Sidebar1 from "./Sidebar1";
import Sidebar2 from "./Sidebar2";
import Sidebar3 from "./Sidebar3";
import { check_out } from "../../actions/customer/customerAuthAction";

function SidebarContent({
  toggleSidebar,
  cart,
  setLoginModal,
  isLogIn,
  check_out,
}) {
  const [step, setStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [payment, setPayment] = useState("");

  const submitCheckOut = () => {
    const newCart = cart.map((product) => {
      return {
        quantity: product.quantity,
        product_id: product.id,
      };
    });
    let data = {
      cart: newCart,
      address_id: selectedAddress,
    };
    if (payment === "unpay") {
      data.is_payed = false;
    }

    check_out(data);
  };

  const nextStep = () => {
    setStep((currentState) => currentState + 1);
  };

  const prevStep = () => {
    setStep((currentState) => currentState - 1);
  };

  return (
    <>
      {step === 1 && (
        <Sidebar1
          toggleSidebar={toggleSidebar}
          data={cart}
          setLoginModal={setLoginModal}
          isLogIn={isLogIn}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 2 && (
        <Sidebar2
          setSelectedAddress={setSelectedAddress}
          selectedAddress={selectedAddress}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <Sidebar3
          prevStep={prevStep}
          payment={payment}
          setPayment={setPayment}
          setSelectedAddress={setSelectedAddress}
          submitCheckOut={submitCheckOut}
        />
      )}
    </>
  );
}

const mapPropsToState = (state) => {
  const { auth, _public } = state;
  return {
    isLogIn: auth.isLogIn,
    cart: _public.cart,
  };
};

export default connect(mapPropsToState, {
  check_out,
})(SidebarContent);
