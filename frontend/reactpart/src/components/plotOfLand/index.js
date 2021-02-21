import React from "react";
import { useContext, useState } from "react";
import { Rnd } from "react-rnd";
import GardenContext from "../contexts/gardenBasicContext";

const PlotOfLand = ({ props, ableToEdit }) => {
  let { field, setField } = useContext(GardenContext);
  function resizingOptionsConstructor(booleanResize) {
    return {
      bottom: booleanResize,
      bottomLeft: booleanResize,
      bottomRight: booleanResize,
      left: booleanResize,
      right: booleanResize,
      top: booleanResize,
      topLeft: booleanResize,
      topRight: booleanResize,
    };
  }

  return (
    <>
      <div>
        {field ? (
          <Rnd
            default={{
              x: field[props].x,
              y: field[props].y,
              width: field[props].width,
              height: field[props].height,
            }}
            disableDragging={!ableToEdit}
            enableResizing={resizingOptionsConstructor(ableToEdit)}
            style={{
              border: "2px solid",
              borderColor: field[props].color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            extendsProps={{
              onClick: () => {
                console.log(1);
              },
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
            resizeHandleWrapperClass="#gardenLimits"
            minHeight="16"
            minWidth="16"
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
            bounds="#gardenLimits"
          >
            {field[props].name}
          </Rnd>
        ) : (
          <p>Nothing to display</p>
        )}
      </div>
    </>
  );
};

export default PlotOfLand;
