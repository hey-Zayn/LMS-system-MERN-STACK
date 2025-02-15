
import {  Menu } from "lucide-react";
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

import { Link, NavLink, useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "@/features/api/AuthApi";
import { useEffect } from "react";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
// import Logo from "../Assets/Logo.png";

const NavBar = () => {
  useEffect(() => {
    gsap.to("#navbar", {
      width: "75%",
      borderRadius: "50px",
      padding: "0 20px",
      top: "2%",
      left: "50%", 
      xPercent: -50,
      ease: "power2.inOut",
      duration: 0.5,
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "+=100",
        scrub: true,
      },
    });
  }, []);
  useEffect(() => {
    // GSAP animation for navbar width and position change
    gsap.to("#Logo", {
      display: "none",
      duration: 0.5,
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "+=100",
        scrub: true,
      },
    });
  }, []);
  // GSAP Animation
  const timeline = gsap.timeline({
    duration: 1,
  });
  useGSAP(() => {
    timeline.from("#navbar", {
      opacity: 0,
      ease: "power2.in",
      y: -200,

    })
  });


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
    <div className="w-full flex items-center justify-center">
      <div id="navbar" className="  h-16 dark:bg-[#020817] bg-white/10 backdrop-blur-md  dark:border-b-gray-800  fixed top-0 left-0 right-0 duration-300 z-50 ">
        <div id="navbar-content" className=" items-center justify-between hidden md:flex h-full gap-10 mx-auto max-w-7xl">
          <div className="flex items-center gap-20">
            <div>
              <h1  className="hidden text-xl font-bold md:block">
                <Link to="/">
                    C
                  <span id="Logo" className="">H</span>
                  <span id="Logo" className="">I</span>
                  M
                  <span  id="Logo" className="">O</span>
                  <span  id="Logo" className="">S</span>
                  A
                </Link>
              </h1>
            </div>


          </div>

          <div>
            <div className="flex gap-10" id="navLink">
              <button>
                <NavLink to="/" className={({ isActive }) =>
                  `relative text-black text-sm font-medium transition-colors  ${isActive ? "active" : ""
                  }`
                }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <span className="absolute -left-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-green-500">
              <span className="absolute inset-0 animate-wave rounded-full bg-green-500 opacity-75" />
            </span>
                      )}
                      Home
                    </>
                  )}
                </NavLink>
              </button>
             
              <button>
                <NavLink to="/about" className={({ isActive }) =>
                  `relative text-black text-sm font-medium transition-colors  ${isActive ? "active" : ""
                  }`
                }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <span className="absolute -left-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-green-500" />
                      )}
                      About us
                    </>
                  )}
                </NavLink>
              </button>

              <button>
                <NavLink to="/all-courses" className={({ isActive }) =>
                  `relative text-black text-sm font-medium transition-colors  ${isActive ? "active" : ""
                  }`
                }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <span className="absolute -left-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-green-500" />
                      )}
                      Courses
                    </>
                  )}
                </NavLink>
              </button>

              <button>
                <NavLink to="/pricing" className={({ isActive }) =>
                  `relative text-black text-sm font-medium transition-colors  ${isActive ? "active" : ""
                  }`
                }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <span className="absolute -left-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-green-500" />
                      )}
                      Pricing
                    </>
                  )}
                </NavLink>
              </button>

              <button>
                <NavLink to="/contact" className={({ isActive }) =>
                  `relative text-black text-sm font-medium transition-colors  ${isActive ? "active" : ""
                  }`
                }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <span className="absolute -left-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-green-500" />
                      )}
                      Contact
                    </>
                  )}
                </NavLink>
              </button>



            </div>
          </div>

          <div className="flex items-center gap-8">
            {/* user icon and dark mode icon */}


            <div id="user">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="h-10 w-10 overflow-hidden">
                      <AvatarImage
                        src={user?.photoUrl || "https://github.com/shadcn.png"}
                        alt="@shadcn"
                        className="h-10 w-10 object-cover rounded-full cursor-pointer"
                      />
                      <AvatarFallback className="h-full w-full flex items-center justify-center bg-gray-200 text-gray-700 font-medium rounded-full">
                        CN
                      </AvatarFallback>
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
                            <span>
                              <Link to="instructor">Dashboard</Link>{" "}
                            </span>
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
                    variant="Link"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Signup
                  </Button>
                  <Button
                    className="bg-[#FF9500] hover:bg-[#FF9500] cursor-pointer"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Login
                  </Button>
                </div>
              )}
            </div>
            {/* <div id="darkMode">
              <DarkMode />
            </div> */}
          </div>

        </div>

        {/* Mobile Nav bar */}
        <div className="flex items-center justify-between w-full h-full px-4 md:hidden">
          <Link to="/">
            {/* <img src={Logo} alt="LOGO" className="w-10 h-10" /> */}
            Logo
          </Link>
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

//  -------------- Mobile

const MobileNavbar = () => {
  const [LogoutUser, { data, isSuccess }] = useLogoutUserMutation();
  const navigate = useNavigate();
  // const { user } = useSelector((store) => store.auth);
  const role = true;
  const logoutHandler = async () => {
    await LogoutUser();
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success(data.messages || "User Logout Successfully");
      navigate("/login");
    }
  }, [isSuccess]);

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
          <SheetTitle className="text-2xl font-bold">Menu</SheetTitle>
          <DarkMode />
        </SheetHeader>
        <Separator className="w-full mr-2 h-[2px] bg-gray-200" />
        <nav className="flex flex-col">
          <div className="flex flex-col gap-2 font-semibold cursor-pointer">
            <span>
              <Link to="/">Home</Link>
            </span>
            <span>
              <Link to="/about">About Us</Link>
            </span>
            <span>
              <Link to="/all-courses">Courses</Link>
            </span>
            <span>
              <Link to="/pricing">Pricing</Link>
            </span>
            <span>
              <Link to="/contact">Contact</Link>
            </span>
          </div>
          <Separator className="w-full mr-2 h-[2px] bg-gray-200" />
          <div className="flex flex-col gap-2 font-semibold cursor-pointer">
            <span>
              <Link to="my-learning">My Learning</Link>
            </span>
            <span>
              <Link to="profile">Profile</Link>
            </span>
          </div>

          <Separator className="w-full mr-2 h-[2px] bg-gray-200" />
          <div className="flex flex-col mt-4">
            <Button variant="destructive">
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
