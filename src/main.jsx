import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster position="top-center"reverseOrder={false}/>
    <RouterProvider router={router}/>
  </StrictMode>,
)
