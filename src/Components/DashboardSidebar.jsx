import React from 'react';
import { NavLink } from 'react-router';
import {
  LayoutDashboard,
  CheckSquare,
  Calendar,
  BarChart3,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  Sparkles,
  Download,
  Radio
} from 'lucide-react';

const DashboardSidebar = () => {
  const mainMenuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard/home', badge: null },
    { name: 'Tasks', icon: CheckSquare, path: '/dashboard/tasks', badge: '12+' },
    { name: 'Calendar', icon: Calendar, path: '/calendar', badge: null },
    { name: 'Analytics', icon: BarChart3, path: '/analytics', badge: null },
    { name: 'Team', icon: Users, path: '/team', badge: null },
  ];

  const generalMenuItems = [
    { name: 'Settings', icon: Settings, path: '/settings', badge: null },
    { name: 'Help', icon: HelpCircle, path: '/help', badge: null },
    { name: 'Logout', icon: LogOut, path: '/logout', badge: null },
  ];

  return (
    <aside className="max-w-full rounded-2xl min-h-screen bg-[#F7F7F7] border-r border-gray-100 flex flex-col">

      <div className="px-6 pt-8 pb-6">
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <Radio className="w-8 h-8 text-[#0E623D]" strokeWidth={2.5} />
            <div className="absolute inset-0 animate-pulse">
              <Radio className="w-8 h-8 text-[#0E623D]/20" strokeWidth={2.5} />
            </div>
          </div>
          <span className="text-2xl font-bold text-gray-900 tracking-tight hidden xl:block">Donezo</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-5 mb-6">
          <span className="text-xs font-semibold text-gray-400 tracking-wider">MENU</span>
        </div>
        
        <nav className="space-y-1">
          {mainMenuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `relative w-full flex items-center justify-between px-5 py-2.5 ${isActive ? '' : 'text-gray-500 hover:bg-gray-200'}`}
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-[#0E623D] rounded-r-full" />
                  )}
                  <div className="flex items-center gap-3">
                    <item.icon 
                      className={`w-5.5 h-5.5 font-bold ${
                        isActive ? 'text-[#0E623D]' : 'text-gray-500'
                      }`} 
                      strokeWidth={2.5}
                    />
                    <span className={`text-sm font-medium hidden lg:block ${
                      isActive ? 'font-bold' : ''
                    }`}>
                      {item.name}
                    </span>
                  </div>
                  {item.badge && (
                    <span className="px-2 py-0.5 text-xs font-medium text-white bg-gray-600 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="mt-8">
          <div className="px-6 mb-4">
            <span className="text-xs font-semibold text-gray-400 tracking-wider">GENERAL</span>
          </div>
          <nav className="space-y-1">
            {generalMenuItems.map((item) => (
              <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `relative w-full flex items-center justify-between px-5 py-2.5 ${isActive ? '' : 'text-gray-500 hover:bg-gray-200'}`}
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-[#0E623D] rounded-r-full" />
                  )}
                  <div className="flex items-center gap-3">
                    <item.icon 
                      className={`w-5.5 h-5.5 font-bold ${
                        isActive ? 'text-[#0E623D]' : 'text-gray-500'
                      }`} 
                      strokeWidth={2.5}
                    />
                    <span className={`text-sm font-medium hidden lg:block ${
                      isActive ? 'font-bold' : ''
                    }`}>
                      {item.name}
                    </span>
                  </div>
                  {item.badge && (
                    <span className="px-2 py-0.5 text-xs font-medium text-white bg-gray-600 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </NavLink>
            ))}
          </nav>
        </div>
      </div>


      <div className="p-5 mt-auto hidden xl:block">
        <div className="bg-[#064229] rounded-2xl p-5 relative overflow-hidden">

          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 border-2 border-white/10 rounded-full" />
            <div className="absolute top-4 right-4 w-16 h-16 border border-white/10 rounded-full" />
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 20 Q40 40, 60 20 T100 20" stroke="white" strokeWidth="1" fill="none" strokeOpacity="0.1" />
              <path d="M150 80 Q170 60, 190 80 T230 80" stroke="white" strokeWidth="1" fill="none" strokeOpacity="0.1" />
              <path d="M30 120 Q50 100, 70 120 T110 120" stroke="white" strokeWidth="1" fill="none" strokeOpacity="0.1" />
            </svg>
          </div>
          
          <div className="relative z-10">
            <div className="mb-4">
              <Sparkles className="w-8 h-8 text-white/90" strokeWidth={1.5} />
            </div>
            
            <h3 className="text-white font-bold text-base mb-1">
              Download our Mobile App
            </h3>
            <p className="text-green-200/80 text-xs mb-4">
              Manage your tasks on the go
            </p>
            
            <button className="w-full bg-[#0E7A3E] hover:bg-[#0E623D] text-white text-sm font-medium py-2.5 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
