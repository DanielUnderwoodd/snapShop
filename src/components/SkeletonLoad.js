import React from "react";
import Skeleton from "react-loading-skeleton";
import { Card } from "react-bootstrap";

export default function SkeletonLoad() {
  return (
    <>
      <Card
        style={{
          textAlign: "center",
        }}
      >
        <Skeleton height={180} width={"90%"} />
        <hr />

        <Card.Body>
          <Skeleton height={80} width={"90%"} />
          <Skeleton height={50} width={"90%"} />
        </Card.Body>
      </Card>
    </>
  );
}
