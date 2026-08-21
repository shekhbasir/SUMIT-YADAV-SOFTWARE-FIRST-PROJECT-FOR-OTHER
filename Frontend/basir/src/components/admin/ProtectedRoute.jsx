import { useEffect, useState } from "react";

import { Navigate } from "react-router-dom";

import { LoaderCircle } from "lucide-react";

import { getCurrentAdmin } from "../../api/adminApi";

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);

  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const verifyAdmin = async () => {
      try {
        const data = await getCurrentAdmin();

        setAuthorized(Boolean(data?.success));
      } catch (error) {
        console.error("Admin verification error:", error);

        setAuthorized(false);
      } finally {
        setLoading(false);
      }
    };

    verifyAdmin();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#030712]">
        <LoaderCircle size={40} className="animate-spin text-lime-400" />
      </div>
    );
  }

  if (!authorized) {
    return <Navigate to="/admin" replace />;
  }

  return children;
}
