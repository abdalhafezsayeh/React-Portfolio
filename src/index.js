import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Import Component
import About from "./components/about/About";
import ErorrPage from "./components/ErorrPage";
import Header from "./components/header/Header";
import RootLayOut from "./components/RootLayOut";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";

// Import Styles And Boostrap 
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayOut />,
    errorElement: <ErorrPage />,
    children: [
      { index: true, element: <Header /> },
      { path: "about", element: <About /> },
      { path: "experience", element: <Experience /> },
      {path:"portfolio", element:<Portfolio />}
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
