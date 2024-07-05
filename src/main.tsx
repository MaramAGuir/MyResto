import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import App from "./pages/App.tsx";
import "./index.css";
import Dishes from "./pages/Dishes.tsx";
import MainDishes from "./pages/MainDishes.tsx";
import BreakFast from "./pages/BreakFast.tsx";
import Dessert from "./pages/Dessert.tsx";
import AllDishes from "./pages/AllDishes.tsx";
import Location from "./pages/Location.tsx";

import { Provider, useDispatch } from "react-redux";
import { store } from "./state/store.ts";
import LoginModal from "./Components/LoginModal.tsx";
import { decrementAsync } from "./state/reserveCounter/reserveCounterSlice.ts";
import { AsyncThunkAction, ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";

// Define a component that handles login modal logic
const LoginHandler = () => {
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  

  const handleClose = () => {
    setShowLogin(false);
    navigate("/");
  };

  return <LoginModal show={showLogin} handleClose={handleClose} />;
};

const router = createBrowserRouter([
  {
    path: "/Login",
    element: <LoginHandler />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Dishes",
    element: <Dishes />,
    children: [
      {
        path: "/Dishes/Main",
        element: <MainDishes />,
      },
      {
        path: "/Dishes/Break_Fast",
        element: <BreakFast />,
      },
      {
        path: "/Dishes/Dessert",
        element: <Dessert />,
      },
      {
        path: "/Dishes/All",
        element: <AllDishes />,
      },
    ],
  },
  {
    path: '/Map',
    element: <Location />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
