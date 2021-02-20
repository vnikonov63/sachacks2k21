import React from "react";
import { useContext } from "react";
import { Rnd } from "react-rnd";
import GardenContext from "../contexts/gardenBasicContext";

const PlotOfLand = ({ props }) => {
  let { field, setField } = useContext(GardenContext);

  return (
    <div>
      {field ? (
        <Rnd
          default={{
            x: field[props].x,
            y: field[props].y,
            width: field[props].width,
            height: field[props].height,
          }}
          style={{
            border: "1px solid black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => {
            console.log(field[props]);
          }}
          onDragStop={(a, b) => {
            setField((prev) => {
              return {
                ...prev,
                [props]: {
                  ...prev[props],
                  x: b.x,
                  y: b.y,
                },
              };
            });
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            setField((prev) => {
              return {
                ...prev,
                [props]: {
                  ...prev[props],
                  width: ref.offsetWidth,
                  height: ref.offsetHeight,
                },
              };
            });
          }}
        ></Rnd>
      ) : (
        <p>Nothing to display</p>
      )}
    </div>
  );
};

export default PlotOfLand;
