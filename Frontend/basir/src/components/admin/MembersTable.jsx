import { Search, Eye, ChevronLeft, ChevronRight, Users } from "lucide-react";

export default function MembersTable({
  members = [],
  loading,
  search,
  setSearch,
  ward,
  setWard,
  page,
  setPage,
  pagination,
  onViewMember,
}) {
  const totalPages = pagination?.totalPages || 1;

  const handleSearchChange = (value) => {
    setSearch(value);
    setPage(1);
  };

  const handleWardChange = (value) => {
    setWard(value);
    setPage(1);
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl">
      <div className="border-b border-white/10 p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400">
                <Users size={21} />
              </div>

              <div>
                <h3 className="font-bold">Movement Members</h3>

                <p className="text-xs text-slate-500">
                  View all registered members
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3">
              <Search size={18} className="text-slate-500" />

              <input
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search name or mobile..."
                className="h-11 w-full bg-transparent text-sm outline-none placeholder:text-slate-600 sm:w-56"
              />
            </div>

            <input
              value={ward}
              onChange={(e) => handleWardChange(e.target.value)}
              placeholder="Filter ward"
              className="h-11 rounded-xl border border-white/10 bg-black/20 px-4 text-sm outline-none placeholder:text-slate-600 focus:border-lime-400/50"
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[850px]">
          <thead className="border-b border-white/10 bg-black/20">
            <tr className="text-left text-xs uppercase tracking-wider text-slate-500">
              <th className="px-5 py-4">Member</th>

              <th className="px-5 py-4">Ward</th>

              <th className="px-5 py-4">Mobile</th>

              <th className="px-5 py-4">Joined</th>

              <th className="px-5 py-4 text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan="5"
                  className="py-16 text-center text-sm text-slate-500"
                >
                  Loading members...
                </td>
              </tr>
            ) : members.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="py-16 text-center text-sm text-slate-500"
                >
                  No members found.
                </td>
              </tr>
            ) : (
              members.map((member) => (
                <tr
                  key={member._id}
                  className="border-b border-white/5 transition hover:bg-white/[0.03]"
                >
                  <td className="px-5 py-4">
                    <p className="font-semibold text-white">
                      {member.name || "-"}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      ID: {member.memberId || member._id}
                    </p>
                  </td>

                  <td className="px-5 py-4">
                    <span className="rounded-lg bg-lime-400/10 px-3 py-1 text-sm text-lime-400">
                      {member.ward || "-"}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-300">
                    {member.mobile || "-"}
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-400">
                    {member.createdAt
                      ? new Date(member.createdAt).toLocaleDateString()
                      : "-"}
                  </td>

                  <td className="px-5 py-4 text-right">
                    <button
                      onClick={() => onViewMember(member._id)}
                      className="inline-flex items-center gap-2 rounded-xl border border-lime-400/20 bg-lime-400/5 px-3 py-2 text-sm text-lime-400 transition hover:bg-lime-400 hover:text-black"
                    >
                      <Eye size={16} />
                      View
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-4 border-t border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-500">
          Page {page} of {totalPages}
          {pagination?.totalMembers !== undefined &&
            ` • ${pagination.totalMembers} members`}
        </p>

        <div className="flex gap-2">
          <button
            disabled={page <= 1}
            onClick={() => setPage((prev) => prev - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            disabled={page >= totalPages}
            onClick={() => setPage((prev) => prev + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
