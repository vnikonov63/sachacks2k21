import React from "react";
import { useState, useEffect, useContext } from "react";
import PlotOfLand from "../plotOfLand";
import { uuid } from "uuidv4";

import GardenContext from "../contexts/gardenBasicContext";
import GardenContextFinal from "../contexts/gardenSavedContext";

import PartNode from "../../schemas/GardenNodeClass";
import ListOFBlocks from "../ListOfBlocksSoFar";

const Garden = ({ props }) => {
  console.log(props);
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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "15px",
          marginTop: "10px",
        }}
      >
        {props ? (
          <>
            <h4>
              Hello, here you can edit your garden, don't forget to click save.
            </h4>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                style={{ marginRight: "20px" }}
                className="waves-effect waves-light btn"
                onClick={() => {
                  let obj = {};
                  obj[uuid()] = new PartNode();
                  setField({ ...field, ...obj });
                }}
              >
                Create a new block
              </button>
              <button
                className="waves-effect waves-light btn"
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
          </>
        ) : (
          <h4>
            Hello, this is your saved model of the garden, stay healty and dont
            forget to eat vegetables!
          </h4>
        )}
      </div>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          id="gardenLimits"
          style={{
            height: "60%",
            width: "50%",
            border: "3px solid black",
            marginRight: "20px",
          }}
        >
          {props
            ? Object.entries(field).map((value) => {
                return (
                  <PlotOfLand key={uuid()} props={value[0]} ableToEdit={true} />
                );
              })
            : Object.entries(gardenState).map((value) => {
                return (
                  <PlotOfLand
                    key={uuid()}
                    props={value[0]}
                    ableToEdit={false}
                  />
                );
              })}
        </div>
        {props ? <ListOFBlocks /> : <></>}
      </div>
    </>
  );
};

export default Garden;
