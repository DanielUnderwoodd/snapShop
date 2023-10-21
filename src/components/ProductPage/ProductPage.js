import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ECommerceCard from "../mainSection/ECommerceCard";
import "../../componentsCss/productPage.css";
import shortid from "shortid";

export default function ProductPage() {
  const products = useSelector((state) => state._public.Products);
  const { productId } = useParams();
  const [product, setProduct] = useState("");

  useEffect(() => {
    const product = products
      .map((element) =>
        element.products.find((product) => productId === product.id.toString())
      )
      .find((product) => product !== undefined);

    setProduct(product);
  }, [products, productId]);

  let { id, image, title, price } = product;
  return (
    <Container className="product-page">
      <ECommerceCard
        id={id}
        img={image}
        text={title}
        price={price}
        key={shortid.generate}
      />
    </Container>
  );
}
