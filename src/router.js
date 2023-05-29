import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/index";
import Propos from "./pages/propos/index";
import Logement from "./pages/logement/index";
import Error from "./pages/Error/index";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,

    },
    {
      path: "Logement",
      element: <Logement />,
    },
    {
     path:'/Error',
     element:<Error />

    },
    {
    path:'/Propos',
    element:<Propos />
    },
  ]);
   
  export default router