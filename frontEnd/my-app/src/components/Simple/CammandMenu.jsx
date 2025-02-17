import { Command } from "cmdk";
import { Eye, Link, LogOut, Phone, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CommandMenu = ({ open, setOpen }) => {
  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

 const navigate = useNavigate();




  const [searchQuery, setSearchQuery] = useState("");
  const searchHandler = (e) => {
    e.preventDefault();
    // console.log(searchQuery);
    // alert(searchQuery);
    if(searchQuery.trim() !== ""){
      navigate(`/course/search?query=${searchQuery}`);
    }
    setSearchQuery("");
    setOpen(false);
  };



  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed inset-0 bg-stone-900/50 z-50"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="bg-white rounded-lg shadow-xl border-stone-300 border overflow-hidden w-full max-w-lg mx-auto mt-12"
      >
        <div className="relative flex items-center justify-between py-2 px-3">
          <form
            onSubmit={(e) => {
              searchHandler(e);
            }}
            className="flex items-center justify-between w-full"
          >
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="relative border-b border-stone-300 p-3 text-lg w-full placeholder:text-stone-400 focus:outline-none"
              placeholder="Search..."
            />
            <button
              type="submit"
              className="bg-stone-950 text-white px-4 py-2 rounded-md"
            >
              Search
            </button>
           
          </form>
        </div>

        <Command.List className="p-3">
          <Command.Empty>
            No results found for <span className="text-violet-500">Hello</span>
          </Command.Empty>
          <Command.Group heading="Team" className="text-sm mb-3 text-stone-400">
            <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
              <Plus />
              Invite Member
            </Command.Item>
            <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
              <Eye />
              See Org Chart
            </Command.Item>
          </Command.Group>

          <Command.Group
            heading="Integrations"
            className="text-sm text-stone-400 mb-3"
          >
            <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
              <Link />
              Link Services
            </Command.Item>
            <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
              <Phone />
              Contact Support
            </Command.Item>
          </Command.Group>

          <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-50 hover:bg-stone-700 bg-stone-950 rounded items-center gap-2">
            <LogOut />
            Sign Out
          </Command.Item>
        </Command.List>
      </div>
    </Command.Dialog>
  );
};

export default CommandMenu;
