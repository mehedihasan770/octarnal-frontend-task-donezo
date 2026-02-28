import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../Api/axiosInstance';

const ProjectProgress = () => {
  const { data: users, isLoading, isError } = useQuery({
    queryKey: ['progressTotalUsers'],
    queryFn: async () => {
      const res = await axiosInstance.get('https://task-api-eight-flax.vercel.app/api/users');
      return res.data;
    },
  });

  const totalUsers = users?.length || 0;

  const chartData = [{ name: 'Total Users', value: 100 }]; 

  if (isLoading) {
    return (
      <div className="bg-white rounded-3xl p-3 shadow-sm border border-gray-100 h-full w-full flex flex-col animate-pulse">
        <div className="h-6 w-36 bg-gray-200 rounded-md mb-6 ml-2 mt-2"></div>
        <div className="flex-1 flex flex-col items-center justify-end pb-4">
          <div className="w-48 h-24 bg-gray-200 rounded-t-full mb-4"></div>
          <div className="h-8 w-16 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-white rounded-3xl p-3 shadow-sm border border-red-100 h-full w-full flex items-center justify-center">
        <div className="text-red-400 font-medium">Failed to load users!</div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-3 shadow-sm border border-gray-100 h-full w-full flex flex-col">
      <h2 className="md:text-[20px] font-semibold text-gray-900 mb-4 px-2 mt-2">Project Progress</h2>

      <div className="relative flex-1 w-full flex flex-col items-center justify-center min-h-40">
        
        <div className="absolute inset-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="100%"
                startAngle={180}
                endAngle={0}
                innerRadius="70%"
                outerRadius="100%"
                dataKey="value"
                stroke="none"
              >
                <Cell fill="#1d6e43" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="absolute bottom-0 flex flex-col items-center justify-end pb-1">
          <span className="lg:text-[44px] font-bold text-gray-900 leading-none">
            {totalUsers}
          </span>
          <span className="text-[10px] lg:text-[13px] font-medium text-gray-400 mt-1">
            Total Users
          </span>
        </div>

      </div>

      <div className="flex justify-center items-center gap-2 mt-6 mb-2">
        <div className="w-3.5 h-3.5 rounded-full bg-[#1d6e43]"></div>
        <span className="text-[13px] text-gray-500 font-medium">Active Members</span>
      </div>

    </div>
  );
};

export default ProjectProgress;