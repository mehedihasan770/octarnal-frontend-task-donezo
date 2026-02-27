import React from 'react';
import { Video } from 'lucide-react';

const Reminders = () => {
  return (
    <div className="bg-white rounded-3xl p-3 shadow-sm border border-gray-100 w-full flex flex-col justify-between">
      
      <div>
        <h3 className="md:text-[20px] font-medium text-gray-900 mb-5">
          Reminders
        </h3>
        
        <h2 className="md:text-[24px] lg:text-2xl font-semibold text-[#0d4228] leading-[1.2] mb-3">
          Meeting with Arc <br /> Company
        </h2>
        
        <p className="text-[14px] text-gray-400 font-medium">
          Time : 02.00 pm - 04.00 pm
        </p>
      </div>

      <button 
        className="mt-6 w-full flex items-center justify-center gap-2 bg-[#164e31] hover:bg-[#0d4228] text-white py-3.5 px-4 rounded-full text-[13px] xl:text-[16px] font-medium transition-all active:scale-95"
      >
        <Video className="w-5 h-5" fill="currentColor" />
        Start Meeting
      </button>

    </div>
  );
};

export default Reminders;