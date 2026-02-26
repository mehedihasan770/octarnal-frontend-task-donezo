import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { axiosInstance } from "../Api/axiosInstance";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();
  // const [loading, setLoading] = useState(false)

  const handleLogin = async (data) => {
    console.log(data);
    try {
      const response = await axiosInstance.post("/api/login", data);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      }

      toast.success("Successfully logged in!");
    } catch (error) {
      toast.error("Invalid credentials, please try again.", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard", { replace: true });
      toast.error("You are already logged in!");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen py-2 px-1 flex justify-center items-center">
      <div className="rounded-3xl w-full max-w-md shadow-2xl relative overflow-hidden font-sans">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-200 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="h-2 bg-linear-to-r from-[#0E623D] to-[#13452D]"></div>

        <div className="p-6">
          <div className="text-center mb-5">
            <div className="w-20 h-20 bg-linear-to-br from-[#0E623D] to-[#13452D] rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-[#0E623D]/20">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.8"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-500 text-sm">
              Please enter your details to sign in
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 block">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.8"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format",
                    },
                  })}
                  placeholder="michael@bird.com"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm outline-none focus:border-[#0E623D] focus:bg-white transition-all duration-200"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 block">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.8"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    message: "Password is required",
                  })}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm outline-none focus:border-[#0E623D] focus:bg-white transition-all duration-200"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-[#0E623D] focus:ring-[#0E623D] focus:ring-2"
                />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <p className="text-sm cursor-pointer font-medium text-[#0E623D] hover:text-[#13452D] transition-colors">
                Forgot password?
              </p>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center cursor-pointer bg-linear-to-r from-[#0E623D] to-[#13452D] text-white py-4 px-4 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-[#0E623D]/30 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  Signing in
                  <span className="flex ml-1">
                    <span className="animate-[bounce_1s_infinite_100ms]">
                      .
                    </span>
                    <span className="animate-[bounce_1s_infinite_200ms]">
                      .
                    </span>
                    <span className="animate-[bounce_1s_infinite_300ms]">
                      .
                    </span>
                  </span>
                </span>
              ) : (
                "Sign in to account"
              )}
            </button>
          </form>

          <div className="text-center mt-4 flex items-center">
            <span className="text-sm text-gray-500">
              Don't have an account?
            </span>
            <p className="text-sm cursor-pointer font-semibold text-[#0E623D] hover:text-[#13452D] ml-2 transition-colors">
              Create account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;