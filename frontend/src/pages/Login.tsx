import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Welcome Back 👋
        </h2>
        <p className="mt-2 text-sm text-center text-gray-500">
          Login to continue to <span className="font-semibold">KG to PG</span>
        </p>

        {/* Login Form */}
        <form className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-800 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="********"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-800 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-emerald-600 px-4 py-2 text-white font-medium shadow-md hover:bg-emerald-700 focus:ring focus:ring-emerald-200"
          >
            Login
          </button>
        </form>

        {/* OR divider */}
        <div className="my-6 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Login */}
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 font-medium shadow-sm hover:bg-gray-50"
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>

        {/* Signup redirect */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-emerald-600 hover:underline font-medium">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
