import React from "react";
import ReuseableButton from "../ReuseableButton";
import { ReactComponent as Add } from "../../img/add.svg";
import { ReactComponent as Remove } from "../../img/remove.svg";
import { ReactComponent as Delete } from "../../img/delete.svg";
export default function CartButton({ quantity, cartChange }) {
  return (
    <>
      {quantity === 0 ? (
        <ReuseableButton action={cartChange} payload={"add"} type={"cart"}>
          Add to cart
        </ReuseableButton>
      ) : (
        <ReuseableButton type={"add-cart"}>
          <Add onClick={() => cartChange("add")} className="add-svg" />
          <div className="quantity">{quantity}</div>
          {quantity > 1 ? (
            <Remove
              onClick={() => cartChange("remove")}
              className="remove-svg"
            />
          ) : (
            <Delete
              onClick={() => cartChange("delete")}
              className="delete-svg"
            />
          )}
        </ReuseableButton>
      )}
    </>
  );
}
