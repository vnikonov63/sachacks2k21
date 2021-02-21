import React from "react";
import { useContext } from "react";
import GardenContext from "../contexts/gardenBasicContext";
import BlockDescriptionDeletion from "../BlockDescriptionDeletion";

function ListOFBlocks() {
  const { field, setField } = useContext(GardenContext);
  return (
    <div
      id="BlocksNames"
      style={{
        height: "60%",
        width: "20%",
        border: "3px solid black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {field &&
        Object.entries(field).map((value) => {
          return <BlockDescriptionDeletion props={value[0]} />;
        })}
    </div>
  );
}

export default ListOFBlocks;
