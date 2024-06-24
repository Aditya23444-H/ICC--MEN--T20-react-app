import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Signup from './pages/Signup.jsx'
import Error from './pages/Error.jsx'
import Login from './pages/Login.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement: <Error />
  },
  {
    path:'/Signup',
    element: <Signup/>
  },
  {
    path:'/Login',
    element: <Login />
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
