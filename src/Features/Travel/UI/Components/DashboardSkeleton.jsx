import React from "react";

const DashboardSkeleton = () => {
  return (
    <div className="min-h-screen animate-pulse bg-[#090B0F] text-white">

      {/* Navbar */}
      <nav className="flex h-20 items-center justify-between border-b border-[#252A31] px-6 md:px-10">
        <div className="h-8 w-36 rounded bg-[#252A31]" />

        <div className="hidden items-center gap-6 md:flex">
          <div className="h-4 w-14 rounded bg-[#252A31]" />
          <div className="h-4 w-16 rounded bg-[#252A31]" />
          <div className="h-4 w-20 rounded bg-[#252A31]" />
        </div>

        <div className="h-10 w-10 rounded-full bg-[#252A31]" />
      </nav>

      {/* Dashboard Content */}
      <main className="mx-auto max-w-7xl p-5 md:p-10">

        {/* Heading */}
        <div className="mb-8 space-y-3">
          <div className="h-3 w-24 rounded bg-[#C9B458]/40" />
          <div className="h-8 w-64 max-w-full rounded bg-[#252A31]" />
          <div className="h-4 w-80 max-w-full rounded bg-[#1B2028]" />
        </div>

        {/* Stats Cards */}
        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-[#252A31] bg-[#101318] p-5"
            >
              <div className="mb-5 h-4 w-28 rounded bg-[#252A31]" />
              <div className="mb-4 h-9 w-16 rounded bg-[#C9B458]/20" />
              <div className="h-3 w-24 rounded bg-[#1B2028]" />
            </div>
          ))}
        </div>

        {/* Chart + Overview */}
        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* Chart */}
          <div className="rounded-xl border border-[#252A31] bg-[#101318] p-6 lg:col-span-2">
            <div className="mb-8 h-5 w-40 rounded bg-[#252A31]" />

            <div className="flex h-56 items-end justify-around gap-4 border-b border-[#252A31] pb-2">
              {[40, 65, 50, 85, 60, 75, 45].map((height, index) => (
                <div
                  key={index}
                  style={{ height: `${height}%` }}
                  className="w-full rounded-t-md bg-[#C9B458]/20"
                />
              ))}
            </div>

            <div className="mt-4 flex justify-around">
              {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                <div key={item} className="h-3 w-8 rounded bg-[#252A31]" />
              ))}
            </div>
          </div>

          {/* Overview */}
          <div className="rounded-xl border border-[#252A31] bg-[#101318] p-6">
            <div className="mb-7 h-5 w-32 rounded bg-[#252A31]" />

            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="mb-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-[#252A31]" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-24 rounded bg-[#252A31]" />
                  <div className="h-3 w-16 rounded bg-[#1B2028]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="rounded-xl border border-[#252A31] bg-[#101318] p-6">
          <div className="mb-6 h-5 w-40 rounded bg-[#252A31]" />

          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 border-b border-[#252A31] py-5 last:border-0"
            >
              <div className="h-11 w-11 shrink-0 rounded-lg bg-[#252A31]" />

              <div className="flex-1 space-y-2">
                <div className="h-4 w-2/3 rounded bg-[#252A31]" />
                <div className="h-3 w-1/3 rounded bg-[#1B2028]" />
              </div>

              <div className="h-6 w-20 rounded-full bg-[#C9B458]/20" />
            </div>
          ))}
        </div>

      </main>
    </div>
  );
};

export default DashboardSkeleton;