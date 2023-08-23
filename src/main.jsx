import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./componants/Home.jsx";
import About from "./componants/About.jsx";
import Books from "./componants/Books.jsx";
import BookDetails from "./componants/BookDetails.jsx";
import LoadingSpinner from "./componants/LoadingSpinner.jsx";

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
        path: 'book/:id',
        element:<BookDetails/>,
        loader: ({params}) => fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'loader',
        element: <LoadingSpinner></LoadingSpinner>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
