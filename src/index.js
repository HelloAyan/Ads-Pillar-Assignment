import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";
import Templates1 from './templates/Templates1';
import Templates2 from './templates/Templates2';
import Templates3 from './templates/Templates3';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Templates1 />,
      },
      {
        path: "/template1",
        element: <Templates1 />,
      },
      {
        path: "/template2",
        element: <Templates2 />,
      },
      {
        path: "/template3",
        element: <Templates3 />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
