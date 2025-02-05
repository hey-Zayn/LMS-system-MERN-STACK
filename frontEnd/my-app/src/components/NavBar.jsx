import { Menu, School } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Separator,
} from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import DarkMode from "@/DarkMode";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
// import { Badge } from "./ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "@/features/api/AuthApi";
import { useEffect } from "react";
import { toast } from "sonner";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { user } = useSelector((store) => store.auth);

  const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    await logoutUser();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message || "User log out.");
      navigate("/login");
    }
  }, [isSuccess]);
  return (
    <div className="h-16 dark:bg-[#020817] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10">
      <div className="items-center justify-between hidden h-full gap-10 mx-auto max-w-7xl md:flex">
        <div className="flex items-center gap-2">
          <School size={"30"} />
          <h1 className="hidden text-2xl font-extrabold md:block">
            <Link to="/"> Ideo Learning</Link>
          </h1>
        </div>
        <div className="flex items-center gap-8">
          {/* user icon and dark mode icon */}
          <div>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="">
                    <AvatarImage
                      src={user?.photoUrl || "https://github.com/shadcn.png"}
                      alt="@shadcn"
                      className="w-[35px] rounded-full overflow-hidden cursor-pointer"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="flex flex-col gap-2 px-6 py-4 m-auto bg-slate-50 border-gray-200 rounded w-52">
                  <DropdownMenuLabel className="text-base font-semibold">
                    My Account
                  </DropdownMenuLabel>

                  <DropdownMenuSeparator className="h-[2px] w-full bg-gray-200 dark:bg-gray-600" />

                  <DropdownMenuGroup className="flex flex-col gap-1">
                    <DropdownMenuItem className="cursor-pointer    hover:outline-none">
                      <span>
                        <Link to="my-learning">My Learning</Link>
                      </span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="cursor-pointer hover:outline-none">
                      <span>
                        {" "}
                        <Link to="profile">Edit Profile</Link>{" "}
                      </span>
                    </DropdownMenuItem>

                    {user.role === "instructor" || user.role === "admin" ? (
                      <>
                        <DropdownMenuItem className="cursor-pointer hover:outline-none">
                          <span>Dashboard</span>
                        </DropdownMenuItem>
                      </>
                    ) : null}
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator className="h-[2px] w-full bg-gray-200 dark:bg-gray-600" />

                  <DropdownMenuItem
                    className="cursor-pointer hover:outline-none"
                    onClick={logoutHandler}
                  >
                    <Button variant="destructive" className="w-full py-2 ">
                      Logout
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </Button>
                <Button
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Signup
                </Button>
              </div>
            )}
          </div>
          <DarkMode />
        </div>
      </div>
      {/* Mobile Nav bar */}
      <div className="flex items-center justify-between w-full h-full px-4 md:hidden">
        <h1 className="text-2xl font-extrabold">Lincoln</h1>
        <MobileNavbar />
      </div>
    </div>
  );
};

export default NavBar;

const MobileNavbar = () => {
  const [LogoutUser, { data, isSuccess }] = useLogoutUserMutation();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    await LogoutUser();
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success(data.messages || "User Logout Successfully");
      navigate("/login");
    }
  }, [isSuccess]);

  const role = "admin";
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className="bg-gray-200 rounded-full hover:bg-gray-200"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col pt-10">
        <SheetHeader className="flex flex-row items-center justify-between w-full">
          <SheetTitle className="text-2xl font-bold">LINCOLN</SheetTitle>
          <DarkMode />
        </SheetHeader>
        <Separator className="w-full mr-2 h-[2px] bg-gray-200" />
        <nav className="flex flex-col">
          <div className="flex flex-col gap-2 font-semibold cursor-pointer">
            <span>
              <Link to="my-learning">My Learning</Link>
            </span>
            <span>
              {" "}
              <Link to="profile">Profile</Link>{" "}
            </span>
          </div>
          <div className="flex flex-col mt-4">
            <Button variant="destructive">
              {" "}
              <span onClick={logoutHandler}>Logout</span>
            </Button>
          </div>
        </nav>
        {role === "instructor" || role === "admin" ? (
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit" className="w-full">
                Dashboard
              </Button>
            </SheetClose>
          </SheetFooter>
        ) : null}
      </SheetContent>
    </Sheet>
  );
};
