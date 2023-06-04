import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Propos from "./pages/Propos";
import Logement from "./pages/Logement";
import Error from "./pages/Error";
import App from "./App";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [ 
        {
          path: "",
          element: <Home />
        },
        {
        path: "/Logement/:id",
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
      {
      path:'/*',
      element:<Error />
      }
    
    ]
    },
   
  ]);
   
  export default router