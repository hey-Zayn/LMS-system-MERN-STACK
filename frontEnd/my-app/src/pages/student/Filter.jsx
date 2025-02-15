// import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Command, Search } from "lucide-react";

const categories = [
  { id: "nextjs", label: "Next JS" },
  { id: "data science", label: "Data Science" },
  { id: "frontend development", label: "Frontend Development" },
  { id: "fullstack development", label: "Fullstack Development" },
  { id: "mern stack development", label: "MERN Stack Development" },
  { id: "backend development", label: "Backend Development" },
  { id: "javascript", label: "Javascript" },
  { id: "python", label: "Python" },
  { id: "docker", label: "Docker" },
  { id: "mongodb", label: "MongoDB" },
  { id: "html", label: "HTML" },
];

const Filter = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };
  return (
    <div className="w-full md:w-[20%]">
      <div className="mb-4">
      <div className="bg-stone-200 mb-4 relative rounded flex items-center px-2 py-1.5 text-sm">
          <Search className="mr-2" size={15} />
          <input
            // onFocus={(e) => {
            //   e.target.blur();
            //   setOpen(true);
            // }}
            type="text"
            placeholder="Search"
            className="w-full bg-transparent placeholder:text-stone-400 focus:outline-none"
          />

          <span className="p-1 text-xs flex gap-0.5 items-center shadow bg-stone-50 rounded absolute right-1.5 top-1/2 -translate-y-1/2">
            <Command size={15} />K
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <h1 className="font-semibold text-lg md:text-xl">Filter Options</h1>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sort By</SelectLabel>
              <SelectItem value="low">Low to High</SelectItem>
              <SelectItem value="high">High to Low</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Separator className="my-4" />

      <div>
        <h1 className="font-semibold md:text-xl mb-2">Categories</h1>
        {categories.map((category) => (
          <div key={category.id} className="flex  items-center space-x-2 mb-2">
            <Checkbox
              id={category.id}
              onCheckedChange={() => handleCategoryChange(category.id)}
            />
            <Label
              htmlFor={category.id}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {category.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
