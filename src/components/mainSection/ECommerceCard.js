import React, { useEffect, useState } from "react";
import "../../componentsCss/EcommerceCard.css";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { change_cart } from "../../actions/public/publicAction";
import CartButton from "../Cart/CartButton";
import SkeletonLoad from "../SkeletonLoad";

function ECommerceCard({ id, text, img, price, change_cart, cart }) {
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState(null);
  useEffect(() => {
    let selectedProduct = cart.find((product) => id === product.id);
    if (selectedProduct) {
      setQuantity(selectedProduct.quantity);
    } else {
      setQuantity(0);
    }
  }, [cart, id]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetch(img);
        const blob = await result.blob();
        const url = URL.createObjectURL(blob);
        setImage(url);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [price]);

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
      {image ? (
        <>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Text>{text}</Card.Text>
            <hr />
            <div className="price-cart">
              <Card.Text className="price"> Price : {price}</Card.Text>

              <CartButton quantity={quantity} cartChange={cartChange} />
            </div>
          </Card.Body>
        </>
      ) : (
        <SkeletonLoad />
      )}
    </Card>
  );
}

const mapStateToProps = (state) => ({
  cart: state._public.cart,
});

const MemoizedECommerceCard = React.memo(ECommerceCard);

export default connect(mapStateToProps, {
  change_cart,
})(MemoizedECommerceCard);
