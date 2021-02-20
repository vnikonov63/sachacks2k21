import React from "react";
import { useState, useEffect, useContext } from "react";
import PlotOfLand from "../plotOfLand";
import { uuid } from "uuidv4";

import GardenContext from "../contexts/gardenBasicContext";

import PartNode from "../../schemas/GardenNodeClass";

const Garden = () => {
  let { field, setField } = useContext(GardenContext);
  return (
    <>
      <button
        onClick={() => {
          let obj = {};
          obj[uuid()] = new PartNode();
          setField({ ...field, ...obj });
        }}
      >
        Click me please
      </button>
      <div>
        {Object.entries(field).map((value) => {
          console.log("The value is ", field[value[0]]);
          return <PlotOfLand key={uuid()} props={value[0]} />;
        })}
      </div>
    </>
  );
};

export default Garden;
