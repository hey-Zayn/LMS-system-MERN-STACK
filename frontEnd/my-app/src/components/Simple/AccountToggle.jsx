import { ChevronDown, ChevronUp } from "lucide-react"
import { useLoadUserQuery } from "@/features/api/AuthApi";
import { Link } from "react-router-dom";

const AccountToggle = () => {
  const { data, isLoading, refetch } = useLoadUserQuery();
  const user = data && data.user;
  return (
     <>
        {/* Account Toggle */}
     <Link to="/profile" >
     <div className="border-b mb-4 mt-2 pb-4 border-stone-300 ">
          <button className="flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center cursor-pointer">
            <img
              src={user?.photoUrl || "https://api.dicebear.com/9.x/notionists/svg"}
              alt="avatar"
              className="size-8 rounded shrink-0 bg-violet-500 shadow object-cover"
            />
            <div className="text-start">
              <span className="text-sm font-bold block">{user?.name}</span>
              <span className="text-xs block text-stone-500">
                {user?.email}
              </span>
            </div>

            <ChevronDown
              className="absolute right-2 top-1/2 translate-y-[calc(-50%+4px)] text-xs"
              size={15}
            />

            <ChevronUp
              className="absolute right-2 top-1/2 translate-y-[calc(-50%-4px)] text-xs "
              size={15}
            />
          </button>
        </div>
     </Link>
     </>
  )
}

export default AccountToggle