import AccountToggle from "@/components/Simple/AccountToggle";
import SearchBar from "@/components/Simple/SearchBar";
import SideBarBottom from "@/components/Simple/SideBarBottom";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  // ChartNoAxesColumn,
  DollarSign,
  FileText,
  Home,
  LandPlot,
  LayoutDashboard,
  Link2,
  // SquareLibrary,
  Users,
} from "lucide-react";

import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex mt-12">
      <div className="hidden lg:block w-[250px] sm:w-[300px] space-y-8 border-r border-gray-300 dark:border-gray-700  p-5 sticky top-0  h-screen">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-2">
            <AccountToggle />

            {/* Search Bar */}
            <SearchBar />

            <div className="space-y-1">
              <Link to="dashboard">
                <Button
                  variant="ghost"
                  className="flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-all bg-white text-stone-950 shadow"
                >
                  <LayoutDashboard className="text-stone-500" />
                  <span>Dashboard</span>
                </Button>
              </Link>

              <Link to="course">
                <button className="flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-all hover:bg-stone-200 bg-transparent text-stone-500">
                  <LandPlot className="text-stone-500" size={18} />
                  <span>Courses</span>
                </button>
              </Link>
            </div>
          </div>

          <div>
            <SideBarBottom />
          </div>
        </div>
      </div>

      <div className="flex-1 p-10 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
