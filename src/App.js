import "./App.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Catalog } from "./components/Catalog";

function App() {
  const [cart, setCart] = useState([]);
  const menu = [
    {
      name: "Lagman",
    },
    { name: "Pizza" },
  ];
  return (
    <div className="App">
      <Catalog />
    </div>
  );
}

export default App;
