import { useEffect, useState } from "react";
import api from "../services/api";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { logout } = useAuth();

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.get("/users");
      setData(response.data);
    } catch {
      setError("Oops! Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-indigo-600">Dashboard</h1>
        <button
          onClick={logout}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      {loading && <Loader />}

      {error && <ErrorMessage message={error} onRetry={fetchData} />}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4">
        {data.map((user) => (
          <div
            key={user.id}
            className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            <h2 className="text-xl font-semibold text-indigo-700">
              {user.name}
            </h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
