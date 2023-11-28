import "./App.css";
import { Outlet } from "react-router-dom";
import { CartContainer } from "./containers/CartContainer";
import { Cart } from "./components/Cart";
import { ProductsContainer } from "./containers/ProductsContainer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        {/* <ProductsContainer.Provider> */}
        <CartContainer.Provider>
          <div className="flex flex-col gap-5">
            <Cart />
            <Outlet />
          </div>
        </CartContainer.Provider>
        {/* </ProductsContainer.Provider> */}
      </QueryClientProvider>
    </div>
  );
}

export default App;
