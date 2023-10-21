import React, { useEffect, useState } from "react";
import "../../componentsCss/EcommerceCard.css";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { change_cart } from "../../actions/public/publicAction";
import CartButton from "../Cart/CartButton";

function ECommerceCard({ id, text, img, price, change_cart, cart }) {
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    let selectedProduct = cart.find((product) => id === product.id);
    if (selectedProduct) {
      setQuantity(selectedProduct.quantity);
    } else {
      setQuantity(0);
    }
  }, [cart, id]);
  const cartChange = (type) => {
    change_cart({
      type,
      cart,
      id,
      price,
      img,
      text,
    });
  };
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Text>{text}</Card.Text>
        <hr />
        <div className="price-cart">
          <Card.Text className="price"> Price : {price}</Card.Text>

          <CartButton quantity={quantity} cartChange={cartChange} />
        </div>
      </Card.Body>
    </Card>
  );
}

const mapStateToProps = (state) => ({
  cart: state._public.cart,
});

export default connect(mapStateToProps, {
  change_cart,
})(ECommerceCard);
