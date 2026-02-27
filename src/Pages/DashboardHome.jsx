import React from 'react';
import DashboardHeader from '../Components/DashboardHeader';
import DashboardStatsCards from '../Components/DashboardStatsCards';

const DashboardHome = () => {
    return (
        <div className='space-y-5'>
            <DashboardHeader/>
            <DashboardStatsCards/>
        </div>
    );
};

export default DashboardHome;