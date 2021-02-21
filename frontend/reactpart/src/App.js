import { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomeComponent from "./components/homeComponent";

import GardenWrapper from "./components/gardenBuilder";
import GardenSavedContext from "./components/contexts/gardenSavedContext";

function App() {
  let stateRandom = {};
  const [gardenState, setGardenState] = useState(stateRandom);
  return (
    <>
      <GardenSavedContext.Provider value={{ gardenState, setGardenState }}>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/edit" exact>
              <GardenWrapper />
            </Route>
            <Route path="/saved" exact></Route>
            <Route path="/" exact>
              <HomeComponent />
            </Route>
          </Switch>
        </Router>
      </GardenSavedContext.Provider>
    </>
  );
}

export default App;
