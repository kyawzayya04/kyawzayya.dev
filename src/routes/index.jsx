import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import Projects from "../pages/Projects.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/project",
          element: <Projects />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
