import React from "react";
import { Root } from "./routes";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
