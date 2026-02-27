import React from "react";
import DashboardSidebar from "../Components/DashboardSidebar";
import { Outlet } from "react-router";
import DashboardNavbar from "../Components/DashboardNavbar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 mt-2 min-h-screen gap-4 max-w-11/12 mx-auto">
      <aside className="col-span-2 hidden md:block">
        <DashboardSidebar/>
      </aside>
      <div className="col-span-full md:col-span-10 space-y-4">
        <nav className="sticky top-2">
          <DashboardNavbar/>
        </nav>
        <main className="row-span-full bg-[#F7F7F7] rounded-2xl min-h-[calc(100vh-94px)] shadow p-5">
          <Outlet/>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
