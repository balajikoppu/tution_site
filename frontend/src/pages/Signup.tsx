import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Signup = () => {
  const [activeTab, setActiveTab] = useState<"student" | "tutor">("student");

  return (
    <div className="flex items-center justify-center min-h-screen bg-white/20">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md p-8">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create Your Account
        </h2>
        <p className="mt-2 text-sm text-center text-gray-500">
          Join <span className="font-semibold">KG to PG</span> as a Student/Parent or Tutor
        </p>

        {/* Rounded Toggle Tabs */}
        <div className="mt-6 flex justify-center">
          <div className="relative flex w-full max-w-sm rounded-full bg-gray-100 p-1">
            <button
              onClick={() => setActiveTab("student")}
              className={`flex-1 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeTab === "student"
                  ? "bg-emerald-600 text-white shadow"
                  : "text-gray-700 hover:text-emerald-600"
              }`}
            >
              Student / Parent
            </button>
            <button
              onClick={() => setActiveTab("tutor")}
              className={`flex-1 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeTab === "tutor"
                  ? "bg-emerald-600 text-white shadow"
                  : "text-gray-700 hover:text-emerald-600"
              }`}
            >
              Tutor
            </button>
          </div>
        </div>

        {/* Form Section */}
        <div className="mt-6 transition-all">
          {activeTab === "student" ? (
            // Student/Parent Form
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:ring focus:ring-emerald-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:ring focus:ring-emerald-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="********"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:ring focus:ring-emerald-200"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-emerald-600 px-4 py-2 text-white font-medium shadow-md hover:bg-emerald-700 focus:ring focus:ring-emerald-200"
              >
                Sign Up as Student/Parent
              </button>
            </form>
          ) : (
            // Tutor Form
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:ring focus:ring-emerald-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:ring focus:ring-emerald-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="********"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:ring focus:ring-emerald-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Subjects You Teach</label>
                <input
                  type="text"
                  placeholder="e.g. Math, Physics"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:ring focus:ring-emerald-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Experience</label>
                <input
                  type="text"
                  placeholder="e.g. 3 years"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:ring focus:ring-emerald-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Hourly Rate (INR)</label>
                <input
                  type="number"
                  placeholder="e.g. 500"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:ring focus:ring-emerald-200"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-emerald-600 px-4 py-2 text-white font-medium shadow-md hover:bg-emerald-700 focus:ring focus:ring-emerald-200"
              >
                Sign Up as Tutor
              </button>
            </form>
          )}
        </div>

        {/* OR Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Signup */}
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 font-medium shadow-sm hover:bg-gray-50"
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>

        {/* Redirect */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-emerald-600 hover:underline font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Signup;