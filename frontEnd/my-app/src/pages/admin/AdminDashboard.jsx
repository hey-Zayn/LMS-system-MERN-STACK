// import AllStudentsChart from "@/components/Simple/AllStudentsChart";
import CardAdmin from "@/components/Simple/CardAdmin";
// import CardLectureDashboard from "@/components/Simple/CardLectureDashboard";
import TopBarDashboard from "@/components/Simple/TopBarDashboard";
// import VisitorsChart from "@/components/Simple/VisitorsChart";
import AllStudentTeacherChart from "@/components/Simple/AllStudentTeacherChart";
// import React from "react";


const AdminDashboard = () => {
  return (
    <>
      <div>
      <TopBarDashboard />
      <div className="w-full flex flex-col md:flex-row lg:flex-row gap-4">
        <CardAdmin />
      </div>
      <div className="w-full  flex items-center justify-center flex-col md:flex-row lg:flex-row gap-4 mt-4">
       
        <AllStudentTeacherChart/>
        
      </div>
      </div>
     {/*  */}





    </>


  );
};

export default AdminDashboard;
