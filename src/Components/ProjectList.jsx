import React from 'react';
import { Plus, Zap, Shield, Sparkles, Layers } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../Api/axiosInstance';

const ProjectList = () => {

  const { data: products, isLoading, isError } = useQuery({
    queryKey: ['projectListProducts'],
    queryFn: async () => {
      const res = await axiosInstance.get('https://task-api-eight-flax.vercel.app/api/products');
      return res.data;
    },
  });

  const getIconAndColor = (index) => {
    const icons = [
      { Icon: Zap, color: 'text-blue-600', bg: 'bg-blue-50' },
      { Icon: Shield, color: 'text-teal-600', bg: 'bg-teal-50' },
      { Icon: Sparkles, color: 'text-green-500', bg: 'bg-green-50' },
      { Icon: Layers, color: 'text-orange-500', bg: 'bg-orange-50' },
    ];
    return icons[index % icons.length]; 
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 h-full w-full animate-pulse">
        <div className="flex justify-between items-center mb-6">
          <div className="h-6 w-24 bg-gray-200 rounded-md"></div>
          <div className="h-8 w-20 bg-gray-200 rounded-full"></div>
        </div>
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="flex gap-4 mb-5 items-center">
            <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
            <div>
              <div className="h-4 w-32 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 w-20 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-red-100 h-full w-full flex items-center justify-center">
        <div className="text-red-400 font-medium">Failed to load projects!</div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-3 shadow-sm border border-gray-100 h-full w-full flex flex-col">
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[18px] font-semibold text-gray-900">Project</h2>
        <button className="flex items-center gap-1 border border-gray-300 rounded-full px-4 py-1.5 text-sm font-medium hover:bg-gray-50 transition-colors">
          <Plus className="w-4 h-4" />
          New
        </button>
      </div>

      <div className="flex-col flex gap-5">
        {products?.map((item, index) => {
          const { Icon, color, bg } = getIconAndColor(index);
          
          return (
            <div key={item.id} className="flex gap-2 items-center group cursor-pointer">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${bg} group-hover:scale-110 transition-transform`}>
                <Icon className={`w-4 h-4 ${color}`} />
              </div>
              <div>
                <h3 className="text-[15px] font-medium text-gray-800 mb-0.5 group-hover:text-green-700 transition-colors">
                  {item.name}
                </h3>
                <p className="text-[12px] text-gray-400">
                  Price: ${item.price} • Sales: {item.sales}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default ProjectList;