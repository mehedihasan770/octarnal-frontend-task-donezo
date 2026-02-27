import React from 'react';
import ProjectAnalytics from './ProjectAnalytics';

const DashboardBottomSection = () => {
  return (
    <div className="grid sm:grid-cols-12 sm:grid-rows-3 min-h-fit gap-5 mt-6">
      
      {/* Box 1 */}
      <div className="sm:col-span-full md:col-span-full lg:col-span-8 xl:col-span-8 2xl:col-span-6">
        <ProjectAnalytics/>
      </div>

      {/* Box 2 */}
      <div className="sm:col-span-full md:col-span-5 lg:col-span-4 xl:col-span-4 2xl:col-span-3 shadow-sm border-2 border-dashed border-gray-300">

      </div>

      {/* Box 3 */}
      <div className="sm:col-span-full md:col-span-7 md:row-span-2 lg:col-span-5 lg:row-span-2 xl:row-span-3 xl:col-span-3 2xl:col-span-3 2xl:row-span-2 shadow-sm border-2 border-dashed border-gray-300">

      </div>

      {/* Box 4 */}
      <div className="sm:col-span-full md:col-span-5 md:row-span-2 lg:col-span-7 lg:row-span-2 xl:row-span-3 xl:col-span-5 2xl:col-span-5 2xl:row-span-2 shadow-sm border-2 border-dashed border-gray-300">

      </div>

      {/* Box 5 */}
      <div className="sm:col-span-6 md:col-span-4 lg:col-span-6 xl:row-span-2 xl:col-span-4 2xl:col-span-4 2xl:row-span-2 shadow-sm border-2 border-dashed border-gray-300">

      </div>

      {/* Box 6 */}
      <div className="sm:col-span-6 md:col-span-3 lg:col-span-6 xl:col-span-4 2xl:col-span-3 shadow-sm border-2 border-dashed border-green-700">
dfsd
      </div>

    </div>
  );
};

export default DashboardBottomSection;