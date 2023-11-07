import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Catalog } from "./components/Catalog";
import { CatalogItem } from "./components/CatalogItem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Catalog /> },
      {
        path: "/catalog",
        element: <Outlet />,
        children: [
          { path: "", element: <App /> },
          {
            path: ":name",
            element: <CatalogItem />,
          },
        ],
      },
      {
        path: "/cart",
        element: (
          <div>
            <h1>Cart</h1>
          </div>
        ),
      },
    ],
  },
]);
