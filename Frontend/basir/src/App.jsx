import { useState } from "react";

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import { LanguageProvider } from "./context/LanguageContext";

import Home from "./pages/Home";

import AdminLogin from "./pages/AdminLogin";

import AdminDashboard from "./pages/AdminDashboard";

import ProtectedRoute from "./components/admin/ProtectedRoute";

function AppRoutes() {
  const navigate = useNavigate();

  const [admin, setAdmin] = useState(null);

  const handleLogin = (adminData) => {
    setAdmin(adminData);

    navigate("/admin/dashboard");
  };

  const handleLogout = () => {
    setAdmin(null);

    navigate("/admin");
  };

  return (
    <Routes>
      {/* HOME */}

      <Route path="/" element={<Home />} />

      {/* ADMIN LOGIN */}

      <Route path="/admin" element={<AdminLogin onLogin={handleLogin} />} />

      {/* ADMIN DASHBOARD */}

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard admin={admin} onLogout={handleLogout} />
          </ProtectedRoute>
        }
      />

      {/* UNKNOWN */}

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppRoutes />
      </LanguageProvider>
    </BrowserRouter>
  );
}
