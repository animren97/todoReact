import List from "./components/List";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Buy milk",
    },
    {
      id: 2,
      name: "Read a book",
    },
    {
      id: 3,
      name: "Go to the Gym",
    },
  ];
  return (
    <div className="App">
      <List data={products} />
    </div>
  );
}

export default App;
