import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import RootLayout from './RootLayout';
import Home from './components/Home';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
function App() {
  const router=createBrowserRouter([{
    path:"/",
    element:<RootLayout/>,
    children:[
      {
        path:'/',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/home',
        element:<Home/>
      }
    ]
  }])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
