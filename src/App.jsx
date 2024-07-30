import { useState } from 'react'
import './App.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Auth/Login/Login'
import SignUp from './Pages/Auth/SignUp/SignUp'


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <SignUp/>
  }

])
function App() {
  return (
    <>
      <RouterProvider router={Routes} /> 
    </>
  )
}

export default App
