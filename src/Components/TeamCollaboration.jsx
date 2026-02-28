import React from 'react';
import { Plus } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../Api/axiosInstance';

const TeamCollaboration = () => {

  const { data: users, isLoading, isError } = useQuery({
    queryKey: ['teamUsers'],
    queryFn: async () => {
      const res = await axiosInstance.get('https://task-api-eight-flax.vercel.app/api/users');
      return res.data;
    },
  });

  const bgColors = ['bg-pink-100', 'bg-green-100', 'bg-blue-100', 'bg-yellow-100', 'bg-purple-100'];

if (isLoading) {
    return (
      <div className="bg-white rounded-3xl p-3 shadow-sm border border-gray-100 h-full w-full flex flex-col animate-pulse">
        
        <div className="flex justify-between items-center mb-8">
          <div className="h-6 w-40 bg-gray-200 rounded-md"></div>
          <div className="h-8 w-20 bg-gray-200 rounded-full"></div>
        </div>
        <div className="flex-col flex gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex justify-between items-center">
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                <div>
                  <div className="h-4 w-32 bg-gray-200 rounded mb-1"></div>
                  <div className="h-3 w-40 bg-gray-200 rounded"></div>
                </div>
              </div>

              <div className="h-6 w-16 bg-gray-200 rounded-md"></div>
              
            </div>
          ))}
        </div>

      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-red-100 h-full w-full flex items-center justify-center">
        <div className="text-red-400 font-medium">Failed to load team members!</div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-3 shadow-sm border border-gray-100 h-full w-full flex flex-col">

      <div className="flex justify-between items-center mb-8">
        <h2 className="md:text-[20px] font-semibold text-gray-900">Team Collaboration</h2>
        <button className="flex items-center gap-1 border border-[#0d4228] text-[#0d4228] rounded-full px-4 py-1.5 text-[14px] font-medium hover:bg-gray-50 transition-colors">
          <Plus className="w-4 h-4" />
          Add
        </button>
      </div>

      <div className="flex-col flex gap-4">
        {users?.slice(0, 4).map((user, index) => {
          const bgColor = bgColors[index % bgColors.length];
          const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}&backgroundColor=transparent`;
          
          const isInactive = user.status.toLowerCase() === 'inactive';
          const statusClasses = isInactive 
            ? 'text-[#ef4444] border-[#ef4444]/30 bg-[#ef4444]/10'
            : 'text-[#52b788] border-[#52b788]/30 bg-[#52b788]/10';

          return (
            <div key={user.id} className="flex justify-between items-center group cursor-pointer">
              
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full overflow-hidden flex items-center justify-center ${bgColor}`}>
                  <img src={avatarUrl} alt={user.name} className="w-10 h-10 object-cover mt-2" />
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold text-gray-900 mb-1 group-hover:text-[#0d4228] transition-colors">
                    {user.name}
                  </h3>

                  <p className="text-[13px] text-gray-400">
                    {user.email}
                  </p>
                </div>
              </div>

              <div className={`border rounded px-2 py-1 text-[12px] font-medium capitalize ${statusClasses}`}>
                {user.status}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

export default TeamCollaboration;