import React from "react";
import { useState, useRef } from "react";
import { validateLoginForm } from "../utils/validation";
const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const [errors, setErrors] = useState({});

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleUser = () => {
    setNewUser(!newUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputData = {
      name: name.current?.value,
      email: email.current?.value,
      password: password.current?.value,
    };

    const validationErrors = validateLoginForm(inputData, newUser);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // 👈 store the errors in state
      return;
    }

    // No errors
    setErrors({}); // 👈 clear previous errors
    console.log("Form is valid", inputData);

    // ... proceed with login or signup logic
  };

  return (
    <div className="relative h-screen w-full bg-black text-white">
      {/* Background Image */}{" "}
      <img
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f83b20c7-a289-4aac-bb47-c08a9fec4de7/web/US-en-20250507-TRIFECTA-perspective_d3be4350-0a72-4b05-929b-bc37b3466a11_large.jpg"
        alt="Background"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      {/* Login Box */}
      <div className="absolute top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-60 px-10 py-12 rounded-md shadow-lg">
        <h2 className="text-3xl font-semibold mb-6">
          {newUser ? `Sign Up` : `Sign In`}
        </h2>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          {newUser && (
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
            className="bg-red-600 hover:bg-red-700 py-3 rounded text-white font-semibold"
          >
            {newUser ? `Sign Up` : `Sign In`}
          </button>
        </form>

        {/* Options */}
        {!newUser ? (
          <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox h-4 w-4" />
              <span>Remember me</span>
            </label>
            <button className="hover:underline">Need help?</button>
          </div>
        ) : null}

        {/* Signup Link */}
        <p className="mt-6 text-gray-400 text-sm">
          {newUser ? `Already have an account?` : `New to Netflix?`}{" "}
          <span
            className="text-white hover:underline cursor-pointer"
            onClick={handleUser}
          >
            {newUser ? `Sign in` : `Sign up now.`}
          </span>
          <br />
          {newUser
            ? `By signing up, you agree to Netflix's Terms of Use and Privacy Policy.`
            : `This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.`}
        </p>
      </div>
    </div>
  );
};

export default Login;
