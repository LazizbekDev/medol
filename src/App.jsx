
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./ui/Layout.jsx";
import Main from "./pages/Main.jsx";
import News from "./component/news/News.jsx";
import Company from "./component/company/Company.jsx";
import Brand from "./component/brand/Brand.jsx";

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
          path: "/medol",
          element: <Brand />
        },
        {
          path: "/really-sorry",
          element: <Company title={"Sorry i couldn't do it well as i thought"} />
        },
        {
          path: "/sorry",
          element: <News />
        }
      ]
    }
  ])
  return (
      <RouterProvider router={router} />
  )
}

export default App
