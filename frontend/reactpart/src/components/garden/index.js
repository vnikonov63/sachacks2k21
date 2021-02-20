import React from "react";
import { useState, useEffect, useContext } from "react";
import PlotOfLand from "../plotOfLand";
import { uuid } from "uuidv4";

import GardenContext from "../contexts/gardenBasicContext";
import GardenContextFinal from "../contexts/gardenSavedContext";

import PartNode from "../../schemas/GardenNodeClass";

const Garden = () => {
  let { field, setField } = useContext(GardenContext);
  const { gardenState, setGardenState } = useContext(GardenContextFinal);
  useEffect(() => {
    if (localStorage.getItem("saved garden")) {
      let obj = JSON.parse(localStorage.getItem("saved garden"));
      console.log(obj);
      setField(obj);
    }
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "15px",
          marginTop: "10px",
        }}
      >
        <button
          onClick={() => {
            let obj = {};
            obj[uuid()] = new PartNode();
            setField({ ...field, ...obj });
          }}
        >
          Create a new block
        </button>
        <button
          onClick={() => {
            setGardenState(field);
            try {
              const serializedState = JSON.stringify(field);
              localStorage.setItem("saved garden", serializedState);
            } catch (err) {
              console.log(err);
            }
          }}
        >
          Save the model
        </button>
      </div>
      <div
        id="gardenLimits"
        style={{ height: "60%", width: "50%", border: "1px solid black" }}
      >
        {Object.entries(field).map((value) => {
          return <PlotOfLand key={uuid()} props={value[0]} />;
        })}
      </div>
    </>
  );
};

export default Garden;
