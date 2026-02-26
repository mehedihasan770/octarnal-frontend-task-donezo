import React from "react";

const DashboardSidebar = () => {
  return (
    <div class="bg-gray-50 w-72 h-screen flex flex-col p-6 font-sans border-r border-gray-200">
      <div class="flex items-center gap-3 mb-8">
        <div class="relative">
          <div class="w-10 h-10 bg-linear-to-br from-[#0E623D] to-[#13452D] rounded-xl flex items-center justify-center shadow-lg shadow-[#0E623D]/20">
            <span class="text-white text-xl font-bold">D</span>
          </div>
          <div class="absolute -top-1 -right-1 w-3 h-3 bg-[#0E623D] rounded-full ring-2 ring-white"></div>
        </div>
        <span class="text-2xl font-bold text-gray-800 tracking-tight">
          Donezo
        </span>
      </div>

      <div class="mb-6">
        <span class="text-xs font-semibold text-gray-400 tracking-wider px-3">
          MENU
        </span>
      </div>

      <div class="space-y-1 mb-8">
        <div class="relative flex items-center gap-3 px-3 py-3 bg-white rounded-xl shadow-sm border-l-4 border-[#0E623D]">
          <div class="w-6 h-6 bg-[#0E623D] rounded-lg flex items-center justify-center">
            <svg
              class="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <rect
                x="3"
                y="3"
                width="7"
                height="7"
                rx="1"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <rect
                x="14"
                y="3"
                width="7"
                height="7"
                rx="1"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <rect
                x="3"
                y="14"
                width="7"
                height="7"
                rx="1"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <rect
                x="14"
                y="14"
                width="7"
                height="7"
                rx="1"
                stroke="currentColor"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <span class="flex-1 text-sm font-medium text-[#0E623D]">
            Dashboard
          </span>
        </div>

        <div class="flex items-center gap-3 px-3 py-3 hover:bg-white rounded-xl transition-all duration-200 group cursor-pointer">
          <div class="w-6 h-6 text-gray-400 group-hover:text-[#0E623D] transition-colors">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M9 12h6m-6 4h6m2-10H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2z"
              />
            </svg>
          </div>
          <span class="flex-1 text-sm font-medium text-gray-600 group-hover:text-gray-900">
            Tasks
          </span>
          <span class="px-2 py-1 bg-[#0E623D] text-white text-xs font-semibold rounded-full">
            12+
          </span>
        </div>

        <div class="flex items-center gap-3 px-3 py-3 hover:bg-white rounded-xl transition-all duration-200 group cursor-pointer">
          <div class="w-6 h-6 text-gray-400 group-hover:text-[#0E623D] transition-colors">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <rect
                x="3"
                y="4"
                width="18"
                height="18"
                rx="2"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path
                stroke-linecap="round"
                stroke-width="1.5"
                d="M3 10h18M8 2v4M16 2v4"
              />
            </svg>
          </div>
          <span class="flex-1 text-sm font-medium text-gray-600 group-hover:text-gray-900">
            Calendar
          </span>
        </div>

        <div class="flex items-center gap-3 px-3 py-3 hover:bg-white rounded-xl transition-all duration-200 group cursor-pointer">
          <div class="w-6 h-6 text-gray-400 group-hover:text-[#0E623D] transition-colors">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <span class="flex-1 text-sm font-medium text-gray-600 group-hover:text-gray-900">
            Analytics
          </span>
        </div>

        <div class="flex items-center gap-3 px-3 py-3 hover:bg-white rounded-xl transition-all duration-200 group cursor-pointer">
          <div class="w-6 h-6 text-gray-400 group-hover:text-[#0E623D] transition-colors">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
          <span class="flex-1 text-sm font-medium text-gray-600 group-hover:text-gray-900">
            Team
          </span>
        </div>
      </div>

      <div class="mb-6">
        <span class="text-xs font-semibold text-gray-400 tracking-wider px-3">
          GENERAL
        </span>
      </div>

      <div class="space-y-1 mb-8">
        <div class="flex items-center gap-3 px-3 py-3 hover:bg-white rounded-xl transition-all duration-200 group cursor-pointer">
          <div class="w-6 h-6 text-gray-400 group-hover:text-[#0E623D] transition-colors">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <span class="flex-1 text-sm font-medium text-gray-600 group-hover:text-gray-900">
            Settings
          </span>
        </div>

        <div class="flex items-center gap-3 px-3 py-3 hover:bg-white rounded-xl transition-all duration-200 group cursor-pointer">
          <div class="w-6 h-6 text-gray-400 group-hover:text-[#0E623D] transition-colors">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                stroke-width="1.5"
                fill="none"
              />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            </svg>
          </div>
          <span class="flex-1 text-sm font-medium text-gray-600 group-hover:text-gray-900">
            Help
          </span>
        </div>

        <div class="flex items-center gap-3 px-3 py-3 hover:bg-white rounded-xl transition-all duration-200 group cursor-pointer">
          <div class="w-6 h-6 text-gray-400 group-hover:text-red-500 transition-colors">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </div>
          <span class="flex-1 text-sm font-medium text-gray-600 group-hover:text-red-500">
            Logout
          </span>
        </div>
      </div>

      <div class="flex-1"></div>

      <div class="bg-linear-to-br from-[#0E623D] to-[#13452D] rounded-2xl p-5 shadow-xl relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute -right-4 -top-4 w-24 h-24 bg-white rounded-full"></div>
          <div class="absolute -left-4 -bottom-4 w-32 h-32 bg-white rounded-full"></div>
          <div class="absolute right-8 bottom-8 w-16 h-16 bg-white/20 rounded-full"></div>
        </div>

        <div class="relative z-10">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center">
              <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                <span class="text-[#0E623D] text-xs font-bold">D</span>
              </div>
            </div>
          </div>

          <h3 class="text-white font-bold text-lg mb-1">
            Download our
            <br />
            Mobile App
          </h3>
          <p class="text-emerald-200 text-sm mb-4">Get easy in another way</p>

          <button class="w-full bg-[#0E623D] hover:bg-[#0a4a2f] text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 text-sm shadow-lg shadow-black/20">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
