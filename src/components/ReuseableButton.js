import React from "react";
import { Button } from "react-bootstrap";
import "../componentsCss/Button.css";

export default function ResueableButton({ payload, action, type, children }) {
  const handleOnClick = () => {
    if (action) {
      action(payload);
    }
  };
  return (
    <div className={type}>
      <Button onClick={handleOnClick}>{children}</Button>
    </div>
  );
}
