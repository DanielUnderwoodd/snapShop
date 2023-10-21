import React from "react";
import { Card } from "react-bootstrap";

function CartImage({ img }) {
  return (
    <div>
      <Card.Img style={{ height: "80px" }} variant="top" src={img} />
    </div>
  );
}

const MemoizedCartImage = React.memo(CartImage);
export default MemoizedCartImage;
