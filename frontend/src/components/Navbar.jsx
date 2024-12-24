import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    setUser(null); // Clear user data on logout
    localStorage.removeItem("token");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavLinks = () => (
    <>
      <Link
        to="/"
        className="text-white text-xl font-semibold hover:text-purple-400 block py-2"
        onClick={() => setIsMenuOpen(false)}
      >
        Home
      </Link>
      <Link
        to="/about"
        className="text-white text-xl font-semibold hover:text-purple-400 block py-2"
        onClick={() => setIsMenuOpen(false)}
      >
        About Us
      </Link>
      <Link
        to="/contact"
        className="text-white text-xl font-semibold hover:text-purple-400 block py-2"
        onClick={() => setIsMenuOpen(false)}
      >
        Contact
      </Link>
      <Link
        to="/pricing"
        className="text-white text-xl font-semibold hover:text-purple-400 block py-2"
        onClick={() => setIsMenuOpen(false)}
      >
        Pricing
      </Link>
    </>
  );

  return (
    <div className="w-full font-inter">
      <div className="shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="text-white text-3xl font-semibold">
              REVIMO 🙂‍↔️
            </div>

            <div className="hidden sm:flex sm:items-center sm:gap-6 md:gap-8 lg:gap-10">
              <Link
                to="/"
                className="text-white text-xl font-semibold hover:text-purple-400 mr-4"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white text-xl font-semibold hover:text-purple-400 mr-4"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-white text-xl font-semibold hover:text-purple-400 mr-4"
              >
                Contact
              </Link>
              <Link
                to="/pricing"
                className="text-white text-xl font-semibold hover:text-purple-400"
              >
                Pricing
              </Link>
            </div>

            <div className="hidden sm:flex sm:items-center">
              {!user ? (
                <>
                  <Link
                    to="/signin"
                    className="text-white text-sm font-semibold hover:text-purple-400 mr-4"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/signup"
                    className="text-white text-sm font-semibold border border-white px-4 py-2 rounded-lg hover:text-purple-400 hover:border-purple-400"
                  >
                    Sign up
                  </Link>
                </>
              ) : (
                <div className="flex items-center gap-4">
                  <img
                    src="https://i.ibb.co/9wp4FZ7/male-3d-avatar-free-png.png"
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full"
                  />
                  <button
                    onClick={handleLogout}
                    className="text-white text-sm font-semibold border border-white px-4 py-2 rounded-lg hover:text-red-400 hover:border-red-400"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Mobile menu */}
            <div className="sm:hidden flex items-center">
              {!user ? (
                <>
                  <Link
                    to="/signin"
                    className="text-white text-sm font-semibold hover:text-purple-400 mr-4"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/signup"
                    className="text-white text-sm font-semibold border border-white px-4 py-2 rounded-lg hover:text-purple-400 hover:border-purple-400"
                  >
                    Sign up
                  </Link>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="text-white text-sm font-semibold border border-white px-4 py-2 rounded-lg hover:text-red-400 hover:border-red-400"
                >
                  Logout
                </button>
              )}
              <button
                onClick={toggleMenu}
                className="text-white ml-4 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12.9499909,17 C12.7183558,18.1411202 11.709479,19 10.5,19 C9.29052104,19 8.28164422,18.1411202 8.05000906,17 L3.5,17 C3.22385763,17 3,16.7761424 3,16.5 C3,16.2238576 3.22385763,16 3.5,16 L8.05000906,16 C8.28164422,14.8588798 9.29052104,14 10.5,14 C11.709479,14 12.7183558,14.8588798 12.9499909,16 L20.5,16 C20.7761424,16 21,16.2238576 21,16.5 C21,16.7761424 20.7761424,17 20.5,17 L12.9499909,17 Z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu items */}
          {isMenuOpen && (
            <div className="sm:hidden pb-4">
              <div className="flex flex-col space-y-2">
                <NavLinks />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
