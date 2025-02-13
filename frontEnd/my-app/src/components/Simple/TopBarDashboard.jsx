import { Calendar } from "lucide-react";
import { useLoadUserQuery } from "@/features/api/AuthApi";
// import React from "react";

const TopBarDashboard = () => {
  const { data, isLoading, refetch } = useLoadUserQuery();
  const user = data && data.user;
  return (
    <>
      <div className="border-b px-4 mb-4 mt-2 pb-4 border-stone-200">
        <div className="flex items-center justify-between p-0.5">
          <div>
            <span className="text-sm font-bold block">
              🚀 Good morning, {user?.name}!
            </span>
            <span className="text-xs block text-stone-500">
              {
                new Date().toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })
              }
            </span>
          </div>

          <button className="flex text-sm items-center gap-2 bg-stone-100 transition-colors hover:bg-violet-100  px-3 py-1.5 rounded">
            <Calendar />
            <span>Prev 6 Months</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default TopBarDashboard;
