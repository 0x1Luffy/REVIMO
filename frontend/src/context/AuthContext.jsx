import { createContext, useState, useEffect } from "react";

// Create a context for user authentication
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // Check if there's a stored user (e.g., from localStorage) when the app loads
  const storedUser = localStorage.getItem("user");
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);

  // Whenever user state changes, store the user in localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
