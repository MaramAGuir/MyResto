import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import App from "./pages/App.tsx";
import "./index.css";
import Dishes from "./pages/Dishes.tsx";
import MainDishes from "./pages/MainDishes.tsx";
import BreakFast from "./pages/BreakFast.tsx";
import Dessert from "./pages/Dessert.tsx";
import AllDishes from "./pages/AllDishes.tsx";
import Location from "./pages/Location.tsx";

import { Provider } from "react-redux";
import { store } from "./state/store.ts";
//test
const router = createBrowserRouter([
  {
    path : "/" ,
    element : <App />

  },
  {
    path : "/Dishes",
    element : <Dishes />,
    children : [
      {
        path : "/Dishes/Main" ,
        element : <MainDishes />,
      },
      {
        path : "/Dishes/Break_Fast" ,
        element : <BreakFast />,
      },
      {
        path : "/Dishes/Dessert" ,
        element : <Dessert />,
      },
      {
        path : "/Dishes/All" ,
        element : <AllDishes />,
      },
    ]
  },
  {
    path : '/Map',
    element : <Location />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(

  <Provider store={store} >
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
