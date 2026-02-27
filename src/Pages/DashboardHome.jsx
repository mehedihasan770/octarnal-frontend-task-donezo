import React from 'react';

const DashboardHome = () => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='sm:space-y-2'>
                    <h1 className='text-black font-semibold sm:text-2xl lg:text-4xl xl:text-5xl'>Dashboard</h1>
                    <p className='text-gray-500 hidden text-[10px] lg:block md:text-[16px]'>Plan, prioritize, and accomplish your tasks with ease.</p>
                </div>
                <div className='space-x-5'>
                    <button className='border rounded-4xl text-[10px] sm:text-[18px] lg:text-[20px] xl:text-2xl p-2 xl:py-3 xl:px-4 cursor-pointer bg-linear-to-tl from-[#21774C] to-[#13452D] text-white'>+ Add Project</button>
                    <button className='border rounded-4xl text-[10px] sm:text-[18px] lg:text-[20px] xl:text-2xl p-1.75 xl:py-3 xl:px-4 cursor-pointer border-[#13452D] text-[#13452D]'>Import Data</button>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;