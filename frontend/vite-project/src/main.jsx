import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Router, RouterProvider } from 'react-router';
import './index.css'
import App from './App.jsx'
import OrderPage from "./pages/OrderPage.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import MenuPage from "./pages/MenuPage.jsx"

const router = createBrowserRouter([
  {
    path: "home",
    element: <App />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
  {
    path: "menu",
    element: <MenuPage />,
  },
  {
    path: "order",
    element: <OrderPage />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
