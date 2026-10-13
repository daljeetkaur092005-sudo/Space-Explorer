import {
  Orbit,
  UserRound,
  Mail,
  LockKeyhole,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useAuth } from "../../../Auth/Hooks/useAuth";
import { useHook } from "../../Hooks/useHook";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    registerSubmit,
  } = useAuth();
  const { navigate } = useHook();
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050a12] px-4 py-10 text-white">
      {/* Background Glow */}
      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-600/15 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-violet-600/15 blur-[120px]" />

      {/* Stars */}
      <div className="absolute left-[15%] top-[15%] h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_12px_3px_rgba(103,232,249,0.4)]" />
      <div className="absolute right-[20%] top-[25%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_12px_3px_rgba(255,255,255,0.3)]" />
      <div className="absolute bottom-[20%] left-[25%] h-1 w-1 rounded-full bg-violet-300" />
      <div className="absolute bottom-[15%] right-[15%] h-1.5 w-1.5 rounded-full bg-cyan-300" />

      {/* Register Card */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-[#080e18]/90 p-7 shadow-2xl shadow-blue-950/30 backdrop-blur-xl sm:p-9">
        {/* Logo */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
            <Orbit size={27} className="text-cyan-300" />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-wide">
              Space <span className="text-cyan-300">Explorer</span>
            </h1>
            <p className="text-xs tracking-[0.2em] text-gray-500">
              DISCOVER THE UNKNOWN
            </p>
          </div>
        </div>

        {/* Heading */}
        <div className="mb-7 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-xs text-cyan-300">
            <Sparkles size={14} />
            YOUR JOURNEY STARTS HERE
          </div>

          <h2 className="text-3xl font-bold tracking-tight">Create Account</h2>

          <p className="mt-2 text-sm text-gray-400">
            Join the mission and explore the universe.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(registerSubmit)}
          noValidate
          className="space-y-5"
        >
          {/* Name */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Full Name
            </label>

            <div className="flex h-12 items-center gap-3 rounded-xl border border-white/10 bg-[#050a12] px-4 transition focus-within:border-cyan-400/60">
              <UserRound size={18} className="text-gray-500" />

              <input
                type="text"
                placeholder="Enter your name"
                {...register("name", {
                  required: "Name is required",
                })}
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
              />
            </div>

            {errors.name && (
              <p className="mt-2 text-xs text-red-400">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Email Address
            </label>

            <div className="flex h-12 items-center gap-3 rounded-xl border border-white/10 bg-[#050a12] px-4 transition focus-within:border-cyan-400/60">
              <Mail size={18} className="text-gray-500" />

              <input
                type="email"
                placeholder="you@example.com"
                {...register("email", {
                  required: "Email is required",
                })}
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
              />
            </div>

            {errors.email && (
              <p className="mt-2 text-xs text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">Password</label>

            <div className="flex h-12 items-center gap-3 rounded-xl border border-white/10 bg-[#050a12] px-4 transition focus-within:border-cyan-400/60">
              <LockKeyhole size={18} className="text-gray-500" />

              <input
                type="password"
                placeholder="Create a password"
                {...register("password", {
                  required: "Password is required",
                })}
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
              />
            </div>

            {errors.password && (
              <p className="mt-2 text-xs text-red-400">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Confirm Password
            </label>

            <div className="flex h-12 items-center gap-3 rounded-xl border border-white/10 bg-[#050a12] px-4 transition focus-within:border-cyan-400/60">
              <LockKeyhole size={18} className="text-gray-500" />

              <input
                type="password"
                placeholder="Confirm your password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                })}
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
              />
            </div>

            {errors.confirmPassword && (
              <p className="mt-2 text-xs text-red-400">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 font-semibold text-white shadow-lg shadow-cyan-500/20 transition duration-300 hover:brightness-110 hover:shadow-blue-500/40 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-7 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="cursor-pointer font-medium text-cyan-300 transition hover:text-white"
          >
            Sign in
          </span>
        </p>

        {/* Footer */}
        <div className="mt-7 border-t border-white/10 pt-5 text-center">
          <p className="text-[10px] tracking-[0.25em] text-gray-600">
            EXPLORE BEYOND THE STARS
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
