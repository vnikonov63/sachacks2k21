import React from "react";
import { useState, useEffect } from "react";
import PlotOfLand from "../plotOfLand";

class PartNode {
  constructor(x = 0, y = 0, width = 200, height = 300) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.id = 
  }
}

const Garden = () => {
  let stateRandom = [];

  let [field, setField] = useState(stateRandom);

  console.log(field);

  return (
    <>
      <button
        onClick={() => {
          setField([...field, new PartNode()]);
        }}
      >
        Click me please
      </button>
      <div id="collectionOfPlottedLand">
        {field.map((value) => {
          return <PlotOfLand props={value} />;
        })}
      </div>
    </>
  );
};

export default Garden;
