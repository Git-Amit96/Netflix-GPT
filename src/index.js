import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from "./Components/Login";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Browse from './Components/Browse';
import Sign from './Components/Sign';

const root = ReactDOM.createRoot(document.getElementById('root'));


const App = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
}


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login/>
      },
      {
        path: "/browse",
        element: <Browse />
      },
      {
        path: "/sign",
        element: <Sign/>
      }
    ]
  }
])

root.render(<RouterProvider router={appRouter} />);
reportWebVitals();