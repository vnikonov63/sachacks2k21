import React from "react";
import { Rnd } from "react-rnd";

const PlotOfLand = ({ props }) => {
  console.log(props);
  return (
    <Rnd
      default={{
        x: props.x,
        y: props.y,
        width: props.width,
        height: props.height,
      }}
      style={{
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={() => {
        console.log("HEEEY");
      }}
    ></Rnd>
  );
};

export default PlotOfLand;
