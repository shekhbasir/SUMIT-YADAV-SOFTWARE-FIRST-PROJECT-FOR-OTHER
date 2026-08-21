import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import {
  Users,
  UserPlus,
  LogOut,
  ShieldCheck,
  RefreshCw,
  LayoutDashboard,
} from "lucide-react";

import {
  adminLogout,
  getDashboard,
  getMember,
  getMembers,
} from "../api/adminApi";

import StatsCard from "../components/admin/StatsCard";

import WardStats from "../components/admin/WardStats";

import MembersTable from "../components/admin/MembersTable";

import MemberModal from "../components/admin/MemberModal";

export default function AdminDashboard({ admin, onLogout }) {
  const [stats, setStats] = useState(null);

  const [members, setMembers] = useState([]);

  const [pagination, setPagination] = useState(null);

  const [loading, setLoading] = useState(true);

  const [memberLoading, setMemberLoading] = useState(false);

  const [search, setSearch] = useState("");

  const [ward, setWard] = useState("");

  const [page, setPage] = useState(1);

  const [selectedMember, setSelectedMember] = useState(null);

  const fetchDashboard = async () => {
    try {
      const data = await getDashboard();

      if (data?.success) {
        setStats(data.stats);
      }
    } catch (error) {
      console.error("Dashboard error:", error);
    }
  };

  const fetchMembers = async () => {
    try {
      setLoading(true);

      const params = {
        page,
        limit: 15,
      };

      if (search.trim()) {
        params.search = search.trim();
      }

      if (ward) {
        params.ward = ward;
      }

      const data = await getMembers(params);

      if (data?.success) {
        setMembers(data.members || []);

        setPagination(data.pagination || null);
      }
    } catch (error) {
      console.error("Members error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchMembers();
    }, 300);

    return () => clearTimeout(timer);
  }, [page, ward, search]);

  const handleViewMember = async (id) => {
    try {
      setMemberLoading(true);

      const data = await getMember(id);

      if (data?.success) {
        setSelectedMember(data.member);
      }
    } catch (error) {
      console.error("Member details error:", error);
    } finally {
      setMemberLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await adminLogout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      onLogout();
    }
  };

  const refreshData = async () => {
    await Promise.all([fetchDashboard(), fetchMembers()]);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-lime-400/[0.05] blur-[150px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-400/[0.04] blur-[150px]" />
      </div>

      {/* Header */}

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#030712]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400">
              <ShieldCheck size={23} />
            </div>

            <div>
              <h1 className="font-black">Sumit Yadav</h1>

              <p className="text-xs text-slate-500">Movement Admin Dashboard</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={refreshData}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-lime-400/40 hover:text-lime-400"
            >
              <RefreshCw size={17} />
            </button>

            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold">
                {admin?.username || "Admin"}
              </p>

              <p className="text-xs text-lime-400">Administrator</p>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-xl border border-red-400/20 bg-red-400/5 px-3 py-2 text-sm text-red-300 transition hover:bg-red-400/10"
            >
              <LogOut size={17} />

              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-[1500px] px-5 py-8">
        {/* Welcome */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 text-lime-400">
            <LayoutDashboard size={18} />

            <span className="text-sm font-semibold">Dashboard Overview</span>
          </div>

          <h2 className="mt-3 text-2xl font-black md:text-4xl">
            Welcome back, {admin?.username || "Admin"} 👋
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Monitor and manage your movement community from one secure
            dashboard.
          </p>
        </motion.div>

        {/* Stats */}

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatsCard
            index={0}
            title="Total Members"
            value={stats?.totalMembers ?? 0}
            subtitle="All registered movement members"
            Icon={Users}
          />

          <StatsCard
            index={1}
            title="Joined Today"
            value={stats?.todayJoined ?? 0}
            subtitle="New members registered today"
            Icon={UserPlus}
          />

          <StatsCard
            index={2}
            title="Latest Activity"
            value={stats?.todayJoined > 0 ? "Active" : "Quiet"}
            subtitle="Today's movement activity"
            Icon={RefreshCw}
          />

          <StatsCard
            index={3}
            title="System"
            value="Secure"
            subtitle="Admin protected access"
            Icon={ShieldCheck}
          />
        </div>

        {/* Ward Stats */}

        <div className="mt-5">
          <WardStats wards={stats?.wards || []} />
        </div>

        {/* Members */}

        <div className="mt-5">
          <MembersTable
            members={members}
            loading={loading}
            search={search}
            setSearch={setSearch}
            ward={ward}
            setWard={(value) => {
              setWard(value);
              setPage(1);
            }}
            page={page}
            setPage={setPage}
            pagination={pagination}
            onViewMember={handleViewMember}
          />
        </div>
      </main>

      {memberLoading && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <RefreshCw size={30} className="animate-spin text-lime-400" />
        </div>
      )}

      <MemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </div>
  );
}
