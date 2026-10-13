import React from "react";
import { useForm } from "react-hook-form";

import { Orbit, Mail, LockKeyhole, ArrowRight, Sparkles } from "lucide-react";
import { useHook } from "../../Hooks/useHook";
import { useAuth } from "../../../Auth/Hooks/useAuth";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    loginSubmit,
  } = useAuth();
  const { navigate } = useHook();

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050a12] px-4 py-10 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_20%,rgba(79,70,229,0.14),transparent_40%),radial-gradient(ellipse_at_90%_85%,rgba(147,51,234,0.10),transparent_35%)]" />

      {/* Stars */}
      <div className="absolute left-[12%] top-[18%] h-1 w-1 rounded-full bg-amber-300" />
      <div className="absolute left-[25%] top-[12%] h-1 w-1 rounded-full bg-white/60" />
      <div className="absolute right-[18%] top-[20%] h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_12px_2px_rgba(251,191,36,0.25)]" />
      <div className="absolute bottom-[20%] left-[15%] h-1 w-1 rounded-full bg-purple-300" />
      <div className="absolute bottom-[15%] right-[12%] h-1 w-1 rounded-full bg-white/60" />

      {/* Planet glow */}
      <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/15 via-purple-700/10 to-transparent blur-sm sm:h-96 sm:w-96" />

      {/* Login UI */}
      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400/25 bg-amber-400/10 text-amber-400">
            <Orbit size={27} />
          </div>

          <div>
            <h2 className="text-lg font-semibold tracking-wide">
              Space <span className="text-amber-400">Explorer</span>
            </h2>
            <p className="mt-1 text-[10px] tracking-[3px] text-gray-500">
              DISCOVER THE UNIVERSE
            </p>
          </div>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-white/10 bg-[#080e18]/95 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-9">
          {/* Heading */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/20 bg-amber-400/10 text-amber-400">
              <Sparkles size={25} />
            </div>

            <p className="mb-3 text-xs font-medium uppercase tracking-[3px] text-amber-400">
              Mission Control
            </p>

            <h1 className="text-3xl font-semibold tracking-tight">
              Welcome Back
            </h1>

            <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-gray-400">
              Sign in and continue exploring the wonders of space.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(loginSubmit)} noValidate>
            {/* Email */}
            <div className="mb-5">
              <label className="mb-2 block text-sm text-gray-300">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",

                    message: "Please enter a valid email address",
                  })}
                  className="h-12 w-full rounded-xl border border-white/10 bg-[#050a12] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/10"
                />
              </div>

              {errors.email && (
                <p className="mt-2 text-xs text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="mb-5">
              <label className="mb-2 block text-sm text-gray-300">
                Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="h-12 w-full rounded-xl border border-white/10 bg-[#050a12] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/10"
                />
              </div>

              {errors.password && (
                <p className="mt-2 text-xs text-red-400">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Options */}
            <div className="mb-6 flex items-center justify-between gap-3 text-xs">
              <label className="flex items-center gap-2 text-gray-400">
                <input type="checkbox" className="h-4 w-4 accent-amber-400" />
                Remember me
              </label>

              <a
                href="#forgot-password"
                className="text-amber-400 transition hover:text-amber-300"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              onClick={() => navigate("/main")}
              className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 font-semibold text-white shadow-lg shadow-cyan-500/20 transition duration-300 hover:brightness-110 hover:shadow-blue-500/40 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </form>

          {/* Divider */}
          <div className="my-7 flex items-center gap-3">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-[10px] tracking-[2px] text-gray-500">
              BEYOND THE STARS
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <p className="text-center text-sm text-gray-400">
            New explorer?{" "}
            <a
              onClick={() => navigate("/register")}
              className="font-medium text-amber-400 hover:text-amber-300"
            >
              Create an account
            </a>
          </p>
        </div>

        <p className="mt-6 text-center text-[10px] tracking-widest text-gray-600">
          SPACE EXPLORER · DISCOVER THE UNKNOWN
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
