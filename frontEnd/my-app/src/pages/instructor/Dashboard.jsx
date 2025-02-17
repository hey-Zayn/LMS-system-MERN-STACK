import AllStudentsChart from "@/components/Simple/AllStudentsChart";
import CardLectureDashboard from "@/components/Simple/CardLectureDashboard";
import TopBarDashboard from "@/components/Simple/TopBarDashboard";
import VisitorsChart from "@/components/Simple/VisitorsChart";

// import React from "react";


const Dashboard = () => {
  // const {data, isLoading} = useLoadUserQuery();
  return (

    <>
      <div>
      <TopBarDashboard />
      <div className="w-full flex  flex-col md:flex-row lg:flex-row gap-4">
        <CardLectureDashboard />
      </div>
      <div className="w-full  flex items-center justify-center flex-col md:flex-row lg:flex-row gap-4 mt-4">
        <VisitorsChart />
        <AllStudentsChart />
      </div>
      </div>
     {/*  */}





    </>


  );
};

export default Dashboard;
