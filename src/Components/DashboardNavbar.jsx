import React, { useState } from 'react';
import { Search, Mail, Bell } from 'lucide-react';
import DashboardSidebar from './DashboardSidebar';

const DashboardNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

const toggleSidebar = () => {
  setIsSidebarOpen(!isSidebarOpen);
};
  return (
    <nav className="w-full bg-gray-50/50 backdrop-blur-2xl rounded-2xl px-4 md:px-6 py-3 md:py-4 shadow-sm">
      <div className="flex items-center justify-between space-x-2">
        <div className="flex-1 max-w-40 sm:max-w-40 md:max-w-70">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-8 pr-13 py-2.5 border border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200 text-gray-700 placeholder-gray-400"
              placeholder="Search"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="inline-flex items-center px-2 py-1 rounded-md bg-gray-100 text-xs font-medium text-gray-500 border border-gray-200">
                ⌘ F
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2.5 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
            <Mail className="h-5 w-5 text-gray-600" />
          </button>

          <button className="p-2.5 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>

          <div onClick={toggleSidebar} className="flex cursor-pointer items-center gap-3 pl-2">
            <img
              src="/api/placeholder/48/48"
              alt="Totok Michael"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-white"
            />
            <div className="hidden md:block">
              <p className="font-semibold text-gray-800 text-sm leading-tight">
                Totok Michael
              </p>
              <p className="text-xs text-gray-500 leading-tight">
                user1@example.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute top-0 right-0 min-h-full bg-white shadow z-50 transition-all duration-300 ease-in-out md:hidden overflow-hidden ${
          isSidebarOpen ? "w-64 opacity-100" : "w-0 opacity-0"
        }`}
      >
        <div className="w-64 h-full relative">
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl font-bold z-50"
          >
            ✕
          </button>

          <div className="h-full w-full overflow-y-auto pb-6">
            <DashboardSidebar />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;