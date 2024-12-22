import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Import your AuthContext

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { setUser } = useContext(AuthContext); // Access global user context
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/login",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // Extract token and user details (if available)
      const { token, email } = response.data;

      // Save user in global context
      setUser({
        email,
        avatar: "/path/to/default/avatar.jpg", // Use default or fetched avatar
        token, // Optional: Store token if needed
      });

      setSuccess("Login successful!");
      navigate("/"); // Redirect to home page
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="flex h-screen bg-indigo-700">
      <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
        <header>
          <img
            className="w-20 mx-auto mb-5"
            src="/api/placeholder/80/80"
            alt="Login logo"
          />
        </header>

        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          {success && <p className="text-green-500 text-sm mb-3">{success}</p>}

          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <button
              className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>

        <footer className="flex justify-between">
          <a className="text-indigo-700 hover:text-pink-700 text-sm" href="#">
            Forgot Password?
          </a>
          <a className="text-indigo-700 hover:text-pink-700 text-sm" href="#">
            Create Account
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Login;
