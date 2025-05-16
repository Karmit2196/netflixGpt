import {RouterProvider,  createBrowserRouter, Navigate} from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute"; 

import React from 'react';
import Login from './Login';
import Browse from './Browse';


const appRouter = createBrowserRouter([
  { path: "/", element: <Navigate to="/login" /> },
  { path: "/login", element: <Login isSignup={false} /> },
  { path: "/signup", element: <Login isSignup={true} /> },
  {
    path: "/browse",
    element: (
      <ProtectedRoute>
        <Browse />
      </ProtectedRoute>
    ),
  },  ]);

  
const Body = () => {


  return (
    <div className="body">
     
      <RouterProvider router={appRouter} />
    </div>
  );
}
export default Body;