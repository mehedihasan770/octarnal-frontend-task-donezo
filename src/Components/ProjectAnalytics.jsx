import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../Api/axiosInstance';

const ProjectAnalytics = () => {

  const { data: apiData, isLoading, isError } = useQuery({
    queryKey: ['projectAnalytics'],
    queryFn: async () => {
      const res = await axiosInstance.get('https://task-api-eight-flax.vercel.app/api/analytics');
      return res.data;
    },
  });

  const formattedData = apiData?.map((item) => {
    const dateObj = new Date(item.date);
    const dayInitial = dateObj.toLocaleDateString('en-US', { weekday: 'narrow' }); 

    return {
      day: dayInitial,
      clicks: item.clicks, 
    };
  }) || [];

if (isLoading) {
    return (
      <div className="bg-white rounded-3xl p-3 shadow-sm border border-gray-100 h-full w-full min-h-70 flex flex-col animate-pulse">
        <div className="h-6 w-40 bg-gray-200 rounded-md mb-6 ml-3 mt-3"></div>
        
        <div className="flex-1 w-full min-h-40 flex items-end justify-around px-2 pb-2 mt-4">
          {['40%', '70%', '50%', '90%', '60%', '45%', '65%'].map((height, index) => (
            <div key={index} className="flex flex-col items-center gap-3 h-full justify-end">
              <div 
                className="w-8.75 bg-gray-200 rounded-full" 
                style={{ height: height }}
              ></div>

              <div className="h-3 w-3 bg-gray-200 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-red-100 h-full w-full min-h-70 flex items-center justify-center">
        <div className="text-red-400 font-medium">Failed to load analytics!</div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-3 shadow-sm border border-gray-100 h-full w-full flex flex-col">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Project Analytics</h2>
      
      <div className="flex-1 w-full min-h-40">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={formattedData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }} barSize={35}>
            
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 14 }} 
              dy={10} 
            />
            
            <Tooltip 
              cursor={{ fill: 'transparent' }} 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
            />
            <Bar dataKey="clicks" radius={[50, 50, 50, 50]} fill="#144930" />
            
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProjectAnalytics;