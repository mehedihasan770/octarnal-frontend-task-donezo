import React from 'react';
import DashboardHeader from '../Components/DashboardHeader';
import DashboardStatsCards from '../Components/DashboardStatsCards';
import DashboardBottomSection from '../Components/DashboardBottomSection';

const DashboardHome = () => {
    return (
        <div className='space-y-5'>
            <DashboardHeader/>
            <DashboardStatsCards/>
            <DashboardBottomSection/>
        </div>
    );
};

export default DashboardHome;