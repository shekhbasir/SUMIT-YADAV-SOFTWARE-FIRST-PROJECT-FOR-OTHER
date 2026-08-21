import { motion } from "framer-motion";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Users,
  Eye,
  LoaderCircle,
} from "lucide-react";

export default function MembersTable({
  members,
  loading,
  search,
  setSearch,
  ward,
  setWard,
  page,
  pagination,
  setPage,
  onViewMember,
}) {
  const totalPages = pagination?.totalPages || 1;

  return (
    <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl">
      {/* Header */}

      <div className="border-b border-white/10 p-5">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <div>
            <h3 className="flex items-center gap-2 font-bold">
              <Users size={20} className="text-lime-400" />
              Movement Members
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              Total {pagination?.total || 0} registered members
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            {/* Search */}

            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3">
              <Search size={17} className="text-slate-500" />

              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);

                  setPage(1);
                }}
                placeholder="Search member..."
                className="h-11 w-full bg-transparent text-sm outline-none placeholder:text-slate-600 sm:w-[220px]"
              />
            </div>

            {/* Ward Filter */}

            <select
              value={ward}
              onChange={(e) => {
                setWard(e.target.value);

                setPage(1);
              }}
              className="h-11 rounded-xl border border-white/10 bg-[#0b1220] px-4 text-sm outline-none"
            >
              <option value="">All Wards</option>

              {[1, 2, 3, 4, 5].map((item) => (
                <option key={item} value={item}>
                  Ward {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Table */}

      <div className="overflow-x-auto">
        <table className="w-full min-w-[850px] text-left">
          <thead className="border-b border-white/10 bg-black/20">
            <tr className="text-xs uppercase tracking-wider text-slate-500">
              <th className="px-5 py-4">Member</th>

              <th className="px-5 py-4">Age</th>

              <th className="px-5 py-4">Ward</th>

              <th className="px-5 py-4">Movement ID</th>

              <th className="px-5 py-4">Joined</th>

              <th className="px-5 py-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="py-20 text-center">
                  <LoaderCircle
                    size={28}
                    className="mx-auto animate-spin text-lime-400"
                  />

                  <p className="mt-3 text-sm text-slate-500">
                    Loading members...
                  </p>
                </td>
              </tr>
            ) : members?.length ? (
              members.map((member, index) => (
                <motion.tr
                  key={member._id}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: Math.min(index * 0.04, 0.4),
                  }}
                  className="border-b border-white/[0.06] transition hover:bg-white/[0.03]"
                >
                  <td className="px-5 py-4">
                    <div className="font-semibold">{member.name}</div>

                    <div className="mt-1 text-xs text-slate-500">
                      {member.mobile}
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-300">
                    {member.age}
                  </td>

                  <td className="px-5 py-4">
                    <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1 text-xs text-lime-400">
                      Ward {member.ward}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-400">
                    {member.movementId}
                  </td>

                  <td className="px-5 py-4 text-xs text-slate-500">
                    {new Date(member.createdAt).toLocaleDateString()}
                  </td>

                  <td className="px-5 py-4">
                    <button
                      onClick={() => onViewMember(member._id)}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs transition hover:border-lime-400/40 hover:text-lime-400"
                    >
                      <Eye size={15} />
                      View
                    </button>
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="py-20 text-center text-sm text-slate-500"
                >
                  No members found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}

      <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 p-5 sm:flex-row">
        <p className="text-xs text-slate-500">
          Page {page} of {totalPages}
        </p>

        <div className="flex gap-2">
          <button
            disabled={page <= 1}
            onClick={() => setPage(page - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 transition hover:border-lime-400/40 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            disabled={page >= totalPages}
            onClick={() => setPage(page + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 transition hover:border-lime-400/40 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
