import React from 'react';

const DashboardBottomSection = () => {
  return (
    // মেইন কন্টেইনার: ল্যাপটপে ৪ কলাম, মোবাইলে ১ কলাম
    <div className="grid sm:grid-cols-12 sm:grid-rows-3 min-h-fit gap-5 mt-6">
      
      {/* Box 1: Project Analytics (বড় বক্স, তাই ২ কলাম) */}
      <div className="sm:col-span-full md:col-span-full lg:col-span-8 xl:col-span-8 2xl:col-span-6 bg-white rounded-3xl p-6 shadow-sm border-2 border-dashed border-gray-300 flex items-center justify-center">
        
      </div>

      {/* Box 2: Reminders (ছোট বক্স, ১ কলাম) */}
      <div className="sm:col-span-full md:col-span-5 lg:col-span-4 xl:col-span-4 2xl:col-span-3 bg-white rounded-3xl p-6 shadow-sm border-2 border-dashed border-gray-300">

      </div>

      {/* Box 3: Project List (ছোট বক্স, ১ কলাম) */}
      <div className="sm:col-span-full md:col-span-7 md:row-span-2 lg:col-span-5 lg:row-span-2 xl:row-span-3 xl:col-span-3 2xl:col-span-3 2xl:row-span-2 bg-white rounded-3xl p-6 shadow-sm border-2 border-dashed border-gray-300">

      </div>

      {/* Box 4: Team Collaboration (বড় বক্স, ২ কলাম) */}
      <div className="sm:col-span-full md:col-span-5 md:row-span-2 lg:col-span-7 lg:row-span-2 xl:row-span-3 xl:col-span-5 2xl:col-span-5 2xl:row-span-2 bg-white rounded-3xl p-6 shadow-sm border-2 border-dashed border-gray-300">

      </div>

      {/* Box 5: Project Progress (ছোট বক্স, ১ কলাম) */}
      <div className="sm:col-span-6 md:col-span-4 lg:col-span-6 xl:row-span-2 xl:col-span-4 2xl:col-span-4 2xl:row-span-2 bg-white rounded-3xl p-6 shadow-sm border-2 border-dashed border-gray-300">

      </div>

      {/* Box 6: Time Tracker (সবুজ বক্স, ১ কলাম) */}
      <div className="sm:col-span-6 md:col-span-3 lg:col-span-6 xl:col-span-4 2xl:col-span-3 bg-[#0d4228] rounded-3xl p-6 shadow-sm border-2 border-dashed border-green-700">

      </div>

    </div>
  );
};

export default DashboardBottomSection;