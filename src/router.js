import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Propos from "./pages/propos";
import Logement from "./pages/logement";
import Error from "./pages/error";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/Logement/:id",
        element: <Logement />,
      },
      {
        path:"error",
        element: <Error />
      },
      {
        path: "/Propos",
        element: <Propos />,
      },
    ],
  },
]);

export default router;
