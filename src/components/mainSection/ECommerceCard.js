import React, { useEffect, useState } from "react";
import "../../componentsCss/EcommerceCard.css";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { change_cart } from "../../actions/public/publicAction";
import CartButton from "../Cart/CartButton";
import SkeletonLoad from "../SkeletonLoad";

function ECommerceCard({ id, text, img, price, change_cart, cart, products }) {
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

  // useEffect(() => {
  //   console.log(text);
  // }, []);

  useEffect(() => {
    let isMounted = true; // A flag to track whether the component is still mounted

    async function fetchData() {
      try {
        const result = await fetch(img);
        const blob = await result.blob();
        const url = URL.createObjectURL(blob);
        if (isMounted) {
          setImage(url);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();

    return () => {
      isMounted = false; // Set the flag to false when the component is unmounted
    };
  }, [img]);

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
  products: state._public.Products,
});

export default connect(mapStateToProps, {
  change_cart,
})(ECommerceCard);
