import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { validateLoginForm } from "../utils/validation";
import { getFriendlyError } from "../utils/firebaseErrors";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";

const Login = ({ isSignup }) => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();

  const handleUser = () => {
    navigate(isSignup ? "/login" : "/signup");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const inputData = {
      name: name.current?.value,
      email: email.current?.value,
      password: password.current?.value,
    };

    const validationErrors = validateLoginForm(inputData, isSignup);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      if (isSignup) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          inputData.email,
          inputData.password
        );
        console.log("✅ User signed up:", userCredential.user);
        toast.success("Account created successfully!");
      } else {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          inputData.email,
          inputData.password
        );
        console.log("✅ User signed in:", userCredential.user);
        toast.success("Welcome back!");
      }

      navigate("/browse");
    } catch (error) {
      console.error("❌ Firebase Auth Error:", error.code);
      toast.error(getFriendlyError(error.code));
    }
    finally {
      setLoading(false); // ✅ Always reset loading state
    }
  };

  return (
    <div className="relative h-screen w-full bg-black text-white">
      <img
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f83b20c7-a289-4aac-bb47-c08a9fec4de7/web/US-en-20250507-TRIFECTA-perspective_d3be4350-0a72-4b05-929b-bc37b3466a11_large.jpg"
        alt="Background"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="absolute top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-60 px-10 py-12 rounded-md shadow-lg">
        <h2 className="text-3xl font-semibold mb-6">
          {isSignup ? `Sign Up` : `Sign In`}
        </h2>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          {isSignup && (
            <>
              <input
                type="text"
                placeholder="Name"
                className="bg-gray-800 px-4 py-3 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                ref={name}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </>
          )}

          <input
            type="email"
            placeholder="Email or phone number"
            className="bg-gray-800 px-4 py-3 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
            ref={email}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <input
            type="password"
            placeholder="Password"
            className="bg-gray-800 px-4 py-3 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
            ref={password}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`bg-red-600 hover:bg-red-700 py-3 rounded text-white font-semibold ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading
              ? isSignup
                ? "Creating Account..."
                : "Logging In..."
              : isSignup
              ? "Sign Up"
              : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-gray-400 text-sm">
          {isSignup ? `Already have an account?` : `New to Netflix?`}{" "}
          <span
            className="text-white hover:underline cursor-pointer"
            onClick={handleUser}
          >
            {isSignup ? `Sign in` : `Sign up now.`}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
