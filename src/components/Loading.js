import React, { Component } from "react";
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: auto auto;
  border-color: red;
`;

export default class Loading extends Component {
  render() {
    return (
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}>
        <RingLoader
          css={override}
          size={150}
          color={"#123abc"}
          loading={true}
        />
      </div>
    );
  }
}
