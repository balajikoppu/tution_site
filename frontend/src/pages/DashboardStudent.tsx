import { useAuth } from "../context/AuthContext";

export default function DashboardStudent() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-sm rounded-2xl p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-green-600">
            👋 Welcome, {user?.name}
          </h1>
          <button
            onClick={logout}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Logout
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-white">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              🔍 Find Tutors
            </h2>
            <p className="text-gray-600">
              Browse and connect with top tutors near you by subject or city.
            </p>
            <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition">
              Search Tutors
            </button>
          </div>

          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-white">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              💬 Messages
            </h2>
            <p className="text-gray-600">
              Chat with tutors and manage your learning schedule easily.
            </p>
            <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition">
              Open Chat
            </button>
          </div>

          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-white">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              💳 Subscription
            </h2>
            <p className="text-gray-600">
              Upgrade your plan to access premium tutors and features.
            </p>
            <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition">
              Manage Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
