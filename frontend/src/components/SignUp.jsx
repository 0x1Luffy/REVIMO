import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/v1/signup", {
        email: formData.email,
        password: formData.password,
      });
      setSuccess("Account created successfully!");
    } catch (error) {
      setError(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <section className="relative py-20 2xl:py-40 bg-gray-800 overflow-hidden">
      <div className="relative container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            {/* Left Column */}
            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
              <div className="max-w-md">
                <span className="text-lg text-blue-400 font-bold">
                  Register Account
                </span>
                <h2 className="mt-8 mb-12 text-5xl font-bold font-heading text-white">
                  Start your journey by creating an account.
                </h2>
                <p className="text-lg text-gray-200">
                  <span>The brown fox jumps over </span>
                  <span className="text-white">the lazy dog.</span>
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="px-6 lg:px-20 py-12 lg:py-24 bg-gray-600 rounded-lg">
                <form onSubmit={handleSubmit}>
                  <h3 className="mb-10 text-2xl text-white font-bold font-heading">
                    Register Account
                  </h3>

                  {error && <p className="mb-4 text-red-500">{error}</p>}
                  {success && <p className="mb-4 text-green-500">{success}</p>}

                  {/* Email Input */}
                  <div className="flex items-center pl-6 mb-3 bg-white rounded-full">
                    <input
                      className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none"
                      type="email"
                      placeholder="example@habib.me"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Password Input */}
                  <div className="flex items-center pl-6 mb-3 bg-white rounded-full">
                    <input
                      className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none"
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Confirm Password Input */}
                  <div className="flex items-center pl-6 mb-6 bg-white rounded-full">
                    <input
                      className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none"
                      type="password"
                      placeholder="Repeat password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button className="py-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200">
                    Get started
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
