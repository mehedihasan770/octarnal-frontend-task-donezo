import React from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, AlertCircle } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center flex flex-col items-center">
        <div className="bg-red-50 p-4 rounded-full mb-4">
          <AlertCircle className="w-12 h-12 text-red-500" />
        </div>
        <p className="text-base font-semibold text-[#0d4228] uppercase tracking-wider">Error 404</p>
        
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-2">
          Page not found
        </h1>
        
        <p className="mt-4 text-base leading-7 text-gray-500 max-w-sm mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been removed or the link is broken.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center cursor-pointer gap-2 rounded-full bg-[#0d4228] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#165c3a] transition-all hover:scale-105 active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>

      </div>
    </div>
  );
};

export default NotFound;