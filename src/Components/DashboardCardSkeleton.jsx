import React from 'react';

const DashboardCardSkeleton = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 animate-pulse">
      
      <div className="w-full rounded-3xl bg-[#1d5c3f] p-4 shadow">
        <div className="flex items-center justify-between">
          <div className="h-4 w-20 bg-[#2b7a54] rounded"></div>
          <div className="flex h-7 w-7 lg:h-10 lg:w-10 rounded-full bg-[#2b7a54]"></div>
        </div>
        <div className="my-6">
          <div className="h-8 sm:h-10 md:h-12 w-16 bg-[#2b7a54] rounded"></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-6 w-10 rounded-full bg-[#2b7a54]"></div>
          <div className="h-3 w-28 bg-[#2b7a54] rounded"></div>
        </div>
      </div>

      <div className="w-full rounded-3xl bg-white p-4 shadow">
        <div className="flex items-center justify-between">
           <div className="h-4 w-20 bg-gray-200 rounded"></div>
           <div className="flex h-7 w-7 lg:h-10 lg:w-10 rounded-full bg-gray-200"></div>
        </div>
        <div className="my-6">
           <div className="h-8 sm:h-10 md:h-12 w-16 bg-gray-200 rounded"></div>
        </div>
        <div className="flex items-center gap-3">
           <div className="h-6 w-10 rounded-full bg-gray-200"></div>
           <div className="h-3 w-28 bg-gray-200 rounded"></div>
        </div>
      </div>

      <div className="w-full rounded-3xl bg-white p-4 shadow">
        <div className="flex items-center justify-between">
           <div className="h-4 w-20 bg-gray-200 rounded"></div>
           <div className="flex h-7 w-7 lg:h-10 lg:w-10 rounded-full bg-gray-200"></div>
        </div>
        <div className="my-6">
           <div className="h-8 sm:h-10 md:h-12 w-16 bg-gray-200 rounded"></div>
        </div>
        <div className="flex items-center gap-3">
           <div className="h-6 w-10 rounded-full bg-gray-200"></div>
           <div className="h-3 w-28 bg-gray-200 rounded"></div>
        </div>
      </div>

      <div className="w-full rounded-3xl bg-white p-4 shadow">
        <div className="flex items-center justify-between">
           <div className="h-4 w-20 bg-gray-200 rounded"></div>
           <div className="flex h-7 w-7 lg:h-10 lg:w-10 rounded-full bg-gray-200"></div>
        </div>
        <div className="my-6">
           <div className="h-8 sm:h-10 md:h-12 w-16 bg-gray-200 rounded"></div>
        </div>
        <div className="flex items-center gap-3">
           <div className="h-6 w-10 rounded-full bg-gray-200"></div>
           <div className="h-3 w-28 bg-gray-200 rounded"></div>
        </div>
      </div>

    </div>
  );
};

export default DashboardCardSkeleton;