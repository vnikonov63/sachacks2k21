import React from "react";
import logo from "./Logo.png";
import usabilityExample from "./exampleGarden.png";
import babushka from "./babuska.png";
import team from "./team.png";

function HomeComponent() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginLeft: "40px" }}
    >
      <img
        style={{ marginTop: "15px", height: "80px", width: "508px" }}
        src={logo}
      ></img>
      <h5>
        This is a project, that will help you visualize the state of your
        garden.
      </h5>
      <h5>You can use it for better planning.</h5>
      <h5>
        This project was motivated by dachas, russian "country-side" houses,
        where people have gardens.
      </h5>
      <h5>
        Below is the example of what you can create with our application so far.
      </h5>
      <img
        style={{ height: "30%", width: "60%", marginTop: "15px" }}
        src={usabilityExample}
      ></img>
      <h5>
        Users are availible to create reactangles, which represent different
        parts of their countryside house.
      </h5>
      <h5>Welcome our great team!</h5>
      <img
        style={{ height: "30%", width: "15%", marginTop: "15px" }}
        src={team}
      ></img>
      <h5>And the true muse of our project - Russian Babushka</h5>
      <img
        style={{ height: "30%", width: "15%", marginTop: "15px" }}
        src={babushka}
      ></img>
      <div style={{ height: "100vh" }}></div>
    </div>
  );
}

export default HomeComponent;
