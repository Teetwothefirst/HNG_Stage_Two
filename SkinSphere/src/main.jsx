import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ErrorPage from './error-page.jsx'
import Cleanser from './Cleanser.jsx'
import Serum from './Serum.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    errorElement: <ErrorPage />,
    children: [
    {
      path: "/Cleanser",
      element: <Cleanser/>
    },
    {
      path: '/Serum',
      element: <Serum />
    }
    
  ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
