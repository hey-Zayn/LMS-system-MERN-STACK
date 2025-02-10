import CardLectureDashboard from "@/components/Simple/CardLectureDashboard";
import TopBarDashboard from "@/components/Simple/TopBarDashboard";

// import React from "react";


const Dashboard = () => {
  return (
    <>
      <div>
      <TopBarDashboard />
      <div className="w-full flex flex-col md:flex-row lg:flex-row gap-4">
        <CardLectureDashboard />
      </div>
      </div>
     {/*  */}





    </>


  );
};

export default Dashboard;
