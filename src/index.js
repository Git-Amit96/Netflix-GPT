import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from "./Components/Header";
import Login from "./Components/Login";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Browse from './Components/Browse';

const root = ReactDOM.createRoot(document.getElementById('root'));


function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  );
}


const appRouter= createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Login/>
      },
      {
        path: "/browse",
        element: <Browse/>
      }
    ]
  }
])

root.render(<RouterProvider router={appRouter}/>);
reportWebVitals();