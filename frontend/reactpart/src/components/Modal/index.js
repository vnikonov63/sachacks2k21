import React from "react";
import { useState, useContext } from "react";
import ReactDom from "react-dom";
import GardenContext from "../contexts/gardenBasicContext";

const ModalStyles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "FFF",
  padding: "50px",
  zIndex: 1000,
};

const OverlayStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  zIndex: 1000,
};

function Modal({ open, props, onClose }) {
  const [state, setState] = useState("");
  let { field, setField } = useContext(GardenContext);
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OverlayStyles}></div>
      <div style={ModalStyles}>
        <button className="red btn" onClick={onClose}>
          Close Modal
        </button>
        <div
          style={{
            width: "300px",
            height: "300px",
            backgroundColor: "white",
            padding: "10px 10px 30px 10px",
          }}
        >
          <p>This is {state}</p>
          <input
            name="name"
            onChange={(element) => {
              setState(element.target.value);
            }}
            value={state}
          ></input>
          <button
            className="btn"
            onClick={() => {
              setField({
                ...field,
                [props]: {
                  ...field[props],
                  name: state,
                },
              });
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Modal;
