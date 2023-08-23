import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./componants/Home.jsx";
import About from "./componants/About.jsx";
import Books from "./componants/Books.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/books',
        element: <Books/>,
        loader: () => fetch('https://api.itbook.store/1.0/new')
      },
      {
        path:'/about',
        element: <About></About>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
