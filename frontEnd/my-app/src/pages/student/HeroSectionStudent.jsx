import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSectionStudent = () => {
  return (
    <div className="relative bg-gradient-to-r form-blue-500 to bg-indigo-600 dark:form-blue-500 to bg-indigo-600 dark:form-gary-800 dark:to-gray-900 py-24 px-4 text-center">
      <div className="max-w-3xl mx-auto ">
        <h1 className="text-white text-4xl font-bold mb-4">
          Find the best course for you
        </h1>
        <p className="text-gray-200 dark:text-gray-400 mb-8">
          Discover, Learn, and Upskill with our wide range of courses
        </p>
        <form className="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-lg overflow-hidden max-w-xl mx-auto mb-6">
         
            {/* <Input type="text"
          classNam="flex-grow border-none focus-visible:ring-0 outline-none px-6 py-3 text-white dark:text-gray-200 rounded-full shadow-lg overflow-hidden max-w-xl mx-auto mb-6 " /> */}
            <Input
              id="inputField"
              type="text"
              className="flex-grow border-none focus-visible:ring-0 outline-none px-6 py-3  dark:text-gray-200 rounded-full shadow-lg overflow-hidden max-w-xl mx-auto mb-0 bg-white"
              placeholder="Search Course here..." // Optional: Add a placeholder
              aria-label="Input field" // Optional: Improve accessibility
            />
          <Button className="bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 px-6 py-3 rounded-r-full cursor-pointer">Search</Button>
        </form>
        <Button className="bg-white dark:bg-gray-800 text-blue-600 rounded-full hover:bg-white cursor-pointer">Explore more</Button>
      </div>
    </div>
  );
};

export default HeroSectionStudent;
