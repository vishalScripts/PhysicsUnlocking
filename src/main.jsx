import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Tests from './pages/Tests.jsx'
import Lectures from './pages/Lectures.jsx'
import Practicals from './pages/Practicals.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/lectures",
        element: <Lectures />
      }
      ,
      {
        path:"/tests",
        element: <Tests />
      },
      {
        path:"/practicals",
        element: <Practicals />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
