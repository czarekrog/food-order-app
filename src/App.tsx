import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { HomeLayout } from "./layout/HomeLayout";
import { Restaurant } from "./components/Restaurant/Restaurant";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomeLayout />, children: [] },
      {
        path: "restaurant/:id",
        element: <Restaurant />,
        children: [],
      },
      {
        path: "*",
        element: <>Error</>,
      },
    ],
  },
  {
    path: "*",
    element: <>Error</>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
