const Login = () => {
    return (
      <div className="relative h-screen w-full bg-black text-white">
        {/* Background Image */}
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f83b20c7-a289-4aac-bb47-c08a9fec4de7/web/US-en-20250507-TRIFECTA-perspective_d3be4350-0a72-4b05-929b-bc37b3466a11_large.jpg"
          alt="Background"
        />
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
  
        {/* Login Box */}
        <div className="absolute top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 px-10 py-12 rounded-md shadow-lg">
          <h2 className="text-3xl font-semibold mb-6">Sign In</h2>
  
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Email or phone number"
              className="bg-gray-800 px-4 py-3 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-gray-800 px-4 py-3 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 py-3 rounded text-white font-semibold"
            >
              Sign In
            </button>
          </form>
  
          {/* Options */}
          <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox h-4 w-4" />
              <span>Remember me</span>
            </label>
            <button className="hover:underline">Need help?</button>
          </div>
  
          {/* Signup Link */}
          <p className="mt-6 text-gray-400 text-sm">
            New to Netflix GPT?{" "}
            <span className="text-white hover:underline cursor-pointer">Sign up now.</span>
          </p>
        </div>
      </div>
    );
  };
  
  export default Login;
  