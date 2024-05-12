import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout/Root";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import RepositoryDetails from "./pages/RepositoryDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "repo/:id",
          element: <RepositoryDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
