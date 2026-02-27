import React from 'react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { axiosInstance } from '../Api/axiosInstance';
import { useQuery } from '@tanstack/react-query'
import DashboardCardSkeleton from './DashboardCardSkeleton';

const DashboardStatisticsCard = () => {
    const { data: overviewData, isLoading} = useQuery({
        queryKey: ['dashboardOverview'],
        queryFn: async () => {
            const res = await axiosInstance.get('https://task-api-eight-flax.vercel.app/api/overview');
            return res.data;
        },
    });

    const {activeUsers, growth, revenue, totalUsers} = overviewData || {};

    if(isLoading) return <DashboardCardSkeleton/>

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
      <div className="w-full rounded-3xl bg-linear-to-tl from-[#21774C] to-[#13452D] p-4 shadow">
        <div className="flex items-center justify-between">
          <span className="text-[10px] lg:text-[13px] xl:text-[16px] font-medium text-gray-100">
            Active Users
          </span>
          <button
            className="flex h-7 w-7 lg:h-10 lg:w-10 items-center justify-center rounded-full bg-white transition-transform hover:scale-105 active:scale-95"
            aria-label="View details"
          >
            <ArrowUpRight className="h-5 w-5 text-black" strokeWidth={2} />
          </button>
        </div>

        <div className="my-6">
          <span className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-none tracking-tight text-[#E9F5DB]">
            {activeUsers}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-1 rounded-full border border-[#A3E635] px-2 py-1">
            <ArrowUp
              className="h-1 w-1 sm:h-3 sm:w-3 text-[#A3E635]"
              strokeWidth={2.5}
            />
            <span className="text-sm font-medium text-[#A3E635]">5</span>
          </div>

          <span className="truncate inline-block w-full text-[10px] lg:text-[14px] xl:text-[16px] font-medium text-[#A3E635]">
            Increased from last month
          </span>
        </div>
      </div>


      <div className="w-full rounded-3xl bg-white p-4 shadow">
        <div className="flex items-center justify-between">
          <span className="text-[10px] lg:text-[13px] xl:text-[16px] font-medium">
            Active growth
          </span>
          <button
            className="flex h-7 w-7 lg:h-10 lg:w-10 items-center justify-center rounded-full border transition-transform hover:scale-105 active:scale-95"
            aria-label="View details"
          >
            <ArrowUpRight className="h-5 w-5 text-black" strokeWidth={2} />
          </button>
        </div>

        <div className="my-6">
          <span className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-none tracking-tight">
            {growth}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-1 rounded-full border border-[#154930] px-2 py-1">
            <ArrowUp
              className="h-1 w-1 sm:h-3 sm:w-3 text-[#154930]"
              strokeWidth={2.5}
            />
            <span className="text-sm font-medium text-[#154930]">6</span>
          </div>

          <span className="truncate inline-block w-full text-[10px] lg:text-[14px] xl:text-[16px] font-medium text-[#154930]">
            Increased from last month
          </span>
        </div>
      </div>


      <div className="w-full rounded-3xl bg-white p-4 shadow">
        <div className="flex items-center justify-between">
          <span className="text-[10px] lg:text-[13px] xl:text-[16px] font-medium">
            Active revenue
          </span>
          <button
            className="flex h-7 w-7 lg:h-10 lg:w-10 items-center justify-center rounded-full border transition-transform hover:scale-105 active:scale-95"
            aria-label="View details"
          >
            <ArrowUpRight className="h-5 w-5 text-black" strokeWidth={2} />
          </button>
        </div>

        <div className="my-6">
          <span className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-none tracking-tight">
            {revenue}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-1 rounded-full border border-[#154930] px-2 py-1">
            <ArrowUp
              className="h-1 w-1 sm:h-3 sm:w-3 text-[#154930]"
              strokeWidth={2.5}
            />
            <span className="text-sm font-medium text-[#154930]">9</span>
          </div>

          <span className="truncate inline-block w-full text-[10px] lg:text-[14px] xl:text-[16px] font-medium text-[#154930]">
            Increased from last month
          </span>
        </div>
      </div>


      <div className="w-full rounded-3xl bg-white p-4 shadow">
        <div className="flex items-center justify-between">
          <span className="text-[10px] lg:text-[13px] xl:text-[16px] font-medium">
            Total Users
          </span>
          <button
            className="flex h-7 w-7 lg:h-10 lg:w-10 items-center justify-center rounded-full border transition-transform hover:scale-105 active:scale-95"
            aria-label="View details"
          >
            <ArrowUpRight className="h-5 w-5 text-black" strokeWidth={2} />
          </button>
        </div>

        <div className="my-6">
          <span className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-none tracking-tight">
            {totalUsers}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-1 rounded-full border border-[#154930] px-2 py-1">
            <ArrowUp
              className="h-1 w-1 sm:h-3 sm:w-3 text-[#154930]"
              strokeWidth={2.5}
            />
            <span className="text-sm font-medium text-[#154930]">7</span>
          </div>

          <span className="truncate inline-block w-full text-[10px] lg:text-[14px] xl:text-[16px] font-medium text-[#154930]">
            Increased from last month
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardStatisticsCard;

