import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { HomeLayout } from "./layout/HomeLayout";
import { Restaurant } from "./components/Restaurant/Restaurant";
import { AuthLayout } from "./layout/AuthLayout";
import { SignInForm } from "./components/Auth/SignInForm";
import { SignUpForm } from "./components/Auth/SignUpForm";
import { ForgotPasswordForm } from "./components/Auth/ForgotPasswordForm";

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
        path: "auth",
        element: <AuthLayout />,
        children: [
          { path: "sign-in", element: <SignInForm /> },
          { path: "sign-up", element: <SignUpForm /> },
          { path: "forgot-password", element: <ForgotPasswordForm /> },
        ],
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
