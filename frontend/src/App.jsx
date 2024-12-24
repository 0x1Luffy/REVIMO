import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AddReview from "./components/AddReview";
import AuthProvider from "./context/AuthContext"; // Import AuthProvider

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/addreview" element={<AddReview />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
