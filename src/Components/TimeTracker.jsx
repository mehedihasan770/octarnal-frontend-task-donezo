import React from 'react';
import { Pause, Square } from 'lucide-react';

const TimeTracker = () => {
  return (
    <div className="relative bg-[#0d4228] rounded-3xl p-3 shadow-sm border border-[#165c3a] h-full w-full flex flex-col overflow-hidden">
      
      <h2 className="text-[16px] font-medium text-green-50 relative z-10">
        Time Tracker
      </h2>

      <div className="flex-1 flex flex-col items-center justify-center relative z-10 mt-2">
        
        <div className="text-[44px] md:text-[48px] font-semibold text-white tracking-widest mb-6 leading-none">
          01:24:08
        </div>

        <div className="flex items-center gap-4">

          <button className="w-12.5 h-12.5 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform shadow-md">

            <Pause className="w-5 h-5 text-[#0d4228] fill-current" />
          </button>

          <button className="w-12.5 h-12.5 rounded-full bg-[#ef4444] flex items-center justify-center hover:scale-105 transition-transform shadow-md">
            <Square className="w-4 h-4 text-white fill-current" />
          </button>

        </div>
      </div>

    </div>
  );
};

export default TimeTracker;