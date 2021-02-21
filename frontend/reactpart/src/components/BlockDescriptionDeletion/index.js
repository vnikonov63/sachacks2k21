import React from "react";
import { useContext, useState } from "react";

import Modal from "../Modal";
import GardenContext from "../contexts/gardenBasicContext";

function BlockDescription({ props }) {
  const [isOpen, setIsOpen] = useState(false);

  const { field, setField } = useContext(GardenContext);
  const data = field[props];
  return (
    <>
      <Modal
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        props={props}
      >
        Interesting,Right?
      </Modal>
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
        <button
          className="waves-effect waves-light btn"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Add Info
        </button>
      </div>
    </>
  );
}

export default BlockDescription;
