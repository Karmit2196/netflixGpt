import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import ProtectedRoute from "./ProtectedRoute";


const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/login",
      element: <Login isSignup={false} />,
    },
    {
      path: "/signup",
      element: <Login isSignup={true} />,
    },
    {
      path: "/browse",
      element: (
        <ProtectedRoute>
          <Browse />
        </ProtectedRoute>
      ),
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;




