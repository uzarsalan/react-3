import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Button } from "./components/Button";

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
      <header className="App-header">
        Корзина:
        <ul>
          {cart.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
        Меню:
        {menu.map((item) => (
          <div className="menu-item">
            <div>{item.name}</div>
            <Button color="red" onClick={() => setCart([...cart, item])}>
              Купить
            </Button>
          </div>
        ))}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
