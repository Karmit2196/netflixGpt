import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import components
import Header from "./components/Header";
import Login from "./components/Login";
import Browse from "./components/Browse";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Loading...
      </div>
    );
  }

  // ✅ Router setup moved here
  const appRouter = createBrowserRouter([
    {
      path: "/login",
      element: (
        <>
          <Header user={user} />
          <Login isSignup={false} />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <Header user={user} />
          <Login isSignup={true} />
        </>
      ),
    },
    {
      path: "/browse",
      element: (
        <ProtectedRoute>
          <>
            <Header user={user} />
            <Browse />
          </>
        </ProtectedRoute>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
      <ToastContainer position="top-center" autoClose={3000} theme="dark" />
    </>
  );
}

export default App;
