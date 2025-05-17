import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

const Header = ({ user }) => {
  const navigate = useNavigate();
  console.log("User in Header:", user);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Failed to log out. Please try again.");
    }
  };

  return (
    <header className="bg-black px-6 py-4 flex items-center justify-between">
      <h1 className="text-3xl font-extrabold text-red-600 tracking-wide font-sans">
        NETFLIX <span className="text-white">GPT</span>
      </h1>

      {user && (
        <button
          onClick={handleLogout}
          className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm"
        >
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
