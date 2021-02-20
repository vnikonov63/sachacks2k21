import Garden from "./components/garden";

function App() {
  return (
    <div className="App">
      <p> The GARDEN APP!!! </p>
      <Garden {...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
    </div>
  );
}

export default App;
