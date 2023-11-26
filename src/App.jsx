
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Medol from "./pages/Medol.jsx";
import Layout from "./ui/Layout.jsx";
import Main from "./pages/Main.jsx";

function App() {

  const router = createBrowserRouter([
    {
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Main />
        },
        {
          path: "/Medol",
          element: <Medol />
        }
      ]
    }
  ])
  return (
      <RouterProvider router={router} />
  )
}

export default App
