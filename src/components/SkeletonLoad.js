import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import CarouselCustom from "../config/CarouselCustom";
import { Card } from "react-bootstrap";

export default function SkeletonLoad() {
  const [dummyData, setDummyData] = useState([]);

  useEffect(() => {
    let outerArray = [];
    var innerArray = [];

    for (let j = 0; j < 3; j++) {
      for (let i = 0; i < 7; i++) {
        innerArray.push(i);
      }
      outerArray.push(innerArray);
      innerArray = [];
    }
    setDummyData(outerArray);
    console.log(dummyData);
  }, []);
  return (
    <div>
      {dummyData.map((data) => {
        return (
          <React.Fragment>
            <Skeleton height={20} width={300} />
            <CarouselCustom>
              {data.map(() => {
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
              })}
            </CarouselCustom>
          </React.Fragment>
        );
      })}
    </div>
  );
}
