import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Repository, Root, Followers, Following, User, Search } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Search />,
      },
      {
        path: "following",
        element: <Following />,
      },
      {
        path: "followers",
        element: <Followers />,
      },
      {
        path: "repository",
        element: <Repository />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
