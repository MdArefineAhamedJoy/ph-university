import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Loging from "../pages/Loging";
import Register from "../pages/Register";

import { adminRoutes } from "./admins.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/admin",
    element: <App></App>,
    children: adminRoutes,
  },
  {
    path: "/loging",
    element: <Loging></Loging>,
  },
  {
    path: "/Register",
    element: <Register></Register>,
  },
]);

export default router;
