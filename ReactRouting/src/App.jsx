import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import ParamComp from './components/ParamComp';
import Courses from './components/Courses';
import MockTests from './components/MockTests';
import Reports from './components/Reports';
import NotFound from './components/NotFound';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <div>
        <Home />
        <Navbar />
      </div>,
    },
    {
      path: "/about",
      element: <div>
        <About />
        <Navbar />
      </div>,
    },
    {
      path: "/dashboard",
      element: <div>
        <Dashboard />
        <Navbar />
      </div>,
      children:[
        {
          path: 'courses',
          element: <div>
            <Courses />
          </div>
        },
        {
          path: 'mock-tests',
          element: <div>
            <MockTests />
          </div>
        },
        {
          path: 'reports',
          element: <div>
            <Reports />
          </div>
        }
      ]
    },
    {
      path: "/student/:id",
      element:
      <div>
        <ParamComp />
        <Navbar />
      </div>
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]
);

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
