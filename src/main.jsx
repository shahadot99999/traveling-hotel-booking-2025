import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* <RouterProvider router={router} /> */}
     <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
