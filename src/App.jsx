import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Notes from "./components/Notes";
import Layout from "./components/Layout";
import ViewNote from "./components/ViewNote";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "notes",
          element: <Notes />,
        },
        {
          path: "notes/:id",
          element: <ViewNote/>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
