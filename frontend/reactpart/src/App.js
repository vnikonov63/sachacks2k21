import GardenWrapper from "./components/gardenBuilder";
import GardenSavedContext from "./components/contexts/gardenSavedContext";
import { useState } from "react";

function App() {
  let stateRandom = {};
  const [gardenState, setGardenState] = useState(stateRandom);
  return (
    <>
      <GardenSavedContext.Provider value={{ gardenState, setGardenState }}>
        <GardenWrapper />
      </GardenSavedContext.Provider>
    </>
  );
}

export default App;
