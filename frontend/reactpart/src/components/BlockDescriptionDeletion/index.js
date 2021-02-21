import React from "react";
import { useContext } from "react";
import GardenContext from "../contexts/gardenBasicContext";

function BlockDescription({ props }) {
  const { field, setField } = useContext(GardenContext);
  const data = field[props];
  return (
    <div
      style={{
        width: "80%",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "10px",
      }}
    >
      <p>{data.x}</p>
      <p>{data.y}</p>
      <p>{data.height}</p>
      <p>{data.width}</p>
      <button
        className="waves-effect waves-light btn"
        onClick={() => {
          let copiedField = JSON.parse(JSON.stringify(field));
          delete copiedField[props];
          setField(copiedField);
        }}
      >
        Delete
      </button>
      <button
        className="waves-effect waves-light btn"
        onClick={() => {
          setField({
            ...field,
            [props]: {
              ...field[props],
              color: field[props].color === "blue" ? "black" : "blue",
            },
          });
        }}
      >
        Highlight
      </button>
    </div>
  );
}

export default BlockDescription;
