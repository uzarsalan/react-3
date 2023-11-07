import "./App.css";
import { Outlet } from "react-router-dom";
import { CartContainer } from "./containers/CartContainer";
import { Cart } from "./components/Cart";

function App() {
  return (
    <div className="App">
      <CartContainer.Provider>
        <div className="flex flex-col gap-5">
          <Cart />
          <Outlet />
        </div>
      </CartContainer.Provider>
    </div>
  );
}

export default App;
