import React from "react";

const AuthSkeleton = () => {
  return (
    <div className="min-h-screen bg-[#090B0F] animate-pulse flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl border border-[#252A31] bg-[#101318] p-8">

        {/* Logo */}
        <div className="mx-auto mb-8 h-8 w-32 rounded-md bg-[#252A31]" />

        {/* Heading */}
        <div className="mx-auto mb-3 h-7 w-48 rounded bg-[#252A31]" />
        <div className="mx-auto mb-8 h-4 w-60 max-w-full rounded bg-[#1B2028]" />

        {/* Email Field */}
        <div className="mb-5">
          <div className="mb-3 h-4 w-20 rounded bg-[#252A31]" />
          <div className="h-12 w-full rounded-lg border border-[#252A31] bg-[#090B0F]" />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <div className="mb-3 h-4 w-24 rounded bg-[#252A31]" />
          <div className="h-12 w-full rounded-lg border border-[#252A31] bg-[#090B0F]" />
        </div>

        {/* Login Button */}
        <div className="h-12 w-full rounded-lg bg-[#C9B458]/30" />

        {/* Footer */}
        <div className="mx-auto mt-7 h-4 w-48 max-w-full rounded bg-[#252A31]" />

      </div>
    </div>
  );
};

export default AuthSkeleton;