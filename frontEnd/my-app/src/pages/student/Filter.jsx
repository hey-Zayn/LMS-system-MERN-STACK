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
import CommandMenu from "@/components/Simple/CammandMenu";

const categories = [
  { id: "Next js", label: "Next JS" },
  { id: "Data Science", label: "Data Science" },
  { id: "Frontend Development", label: "Frontend Development" },
  { id: "Fullstack Development", label: "Fullstack Development" },
  { id: "Mern Stack Development", label: "MERN Stack Development" },
  { id: "Backend Development", label: "Backend Development" },
  { id: "Javascript", label: "Javascript" },
  { id: "Python", label: "Python" },
  { id: "Docker", label: "Docker" },
  { id: "MongoDB", label: "MongoDB" },
  { id: "HTML", label: "HTML" },
];

const Filter = ({ handleFilterChange }) => {
  // const [selectedCategory, setSelectedCategory] = useState([]);
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortByPrice, setSortByPrice] = useState("");

  const handleCategoryChange = (categoryId) => {
    // setSelectedCategory(value);
    setSelectedCategories((prevCategories) => {
      const newCategories = prevCategories.includes(categoryId) ? prevCategories.filter(id => id !== categoryId) : [...prevCategories, categoryId];

      handleFilterChange(newCategories, sortByPrice);
      return newCategories;
    });
  };

  const selectByPriceHandler = (selectedValue) => {
    setSortByPrice(selectedValue);
    handleFilterChange(selectedCategories, selectedValue);
  }
  // const searchHandler = (e) => {
  //   e.preventDefault();
  //   console.log(searchQuery);
  // }
  return (
    <div className="w-full md:w-[20%]">
      <div className="mb-4">
        <div className="bg-stone-200 mb-4 relative rounded flex items-center px-2 py-1.5 text-sm">
          <form  className="flex items-center w-full">
            <Search className="mr-2" size={15} />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              placeholder="Search"
              className="w-full bg-transparent placeholder:text-stone-400 focus:outline-none"
            />
          </form>
          <span className="p-1 text-xs flex gap-0.5 items-center shadow bg-stone-50 rounded absolute right-1.5 top-1/2 -translate-y-1/2">
            <Command size={15} />K
          </span>
        </div>
        <CommandMenu open={open} setOpen={setOpen} />
      </div>

      <div className="flex items-center justify-between gap-4">
        <h1 className="font-semibold text-lg md:text-xl">Filter Options</h1>

        <Select onValueChange={selectByPriceHandler}>
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
