import React from "react";
import { Rnd } from "react-rnd";

const Garden = () => {
  console.log(Rnd);
  return (
    <Rnd
      default={{
        x: 0,
        y: 0,
        width: 300,
        height: 300,
      }}
      style={{ border: "1px solid black" }}
    >
      <p>Plot of land</p>
    </Rnd>
  );
};

export default Garden;
