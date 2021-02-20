import React from "react";
import { useContext } from "react";
import { Rnd } from "react-rnd";
import GardenContext from "../contexts/gardenBasicContext";

const PlotOfLand = ({ props }) => {
  console.log(props);
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
            console.log(props.id);
          }}
          onDragStop={(a, b) => {
            setField((prev) => {
              /*
              return prev.map((plotLand) => {
                plotLand =
                  plotLand.id === props.id
                    ? {
                        ...plotLand,
                        x: b.x,
                        y: b.y,
                      }
                    : plotLand;
              });*/
              return {
                ...prev,
                props: {
                  ...prev[props],
                  x: b.x,
                  y: b.y,
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
