import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useCreateCourseMutation } from "@/features/api/CourseApi";
import { useEffect } from "react";
import { toast } from "sonner";

const AddCourse = () => {
  
  const [courseTitle,setCourseTitle]  = useState("");
  const [category,setCategory]  = useState("");
  const [createCourse, {data, isLoading, error, isSuccess}] = useCreateCourseMutation();

  const navigate = useNavigate();
  const getSelectedCategory = async (value) => {
    setCategory(value);
  }

  const createCourseHandler = async () => {
   await createCourse({ courseTitle, category })
  };
  useEffect(()=>{
    if(isSuccess){
      toast.success(data.message || "Course Created.");
      navigate("../course");
    }
  },[isSuccess,error,data,navigate])
  return (
    <div className="flex-1 mx-10">
      <div className="mb-4">
        <h1 className="font-bold text-xl">
          Let&apos;s add course, add some basic couse details for your new course.
        </h1>
        <p className="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore,

          minima.
        </p>
      </div>
      <div className="space-y-4">
        <div>
          <Label>Title</Label>
          <Input
            type="text"
            name="courseTitle"
            value={courseTitle}
            onChange={(e)=>{setCourseTitle(e.target.value)}}
            placeholder="Your Course Name"
          />
        </div>
        <div>
          <Label>Category</Label>
          <Select onValueChange={getSelectedCategory}>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Choose .."  />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                <SelectItem value="frontEndDevelopment">FrontEnd Development</SelectItem>
                <SelectItem value="backEndDevelopment">BackEnd Development</SelectItem>
                <SelectItem value="fullStackDevelopment">Full Stack Development</SelectItem>
                <SelectItem value="dataBase">DataBase</SelectItem>
                <SelectItem value="mernStack">MERN Stack</SelectItem>
                <SelectItem value="meanStack">MEAN Stack</SelectItem>
                <SelectItem value="dsa">DSA</SelectItem>
                <SelectItem value="ai">AI</SelectItem>
              </SelectGroup>  
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2"  >
          <Button
            
            variant="outline"
            onClick={() => {
              navigate("../course");
            }}
          >
            Back
          </Button>
          <Button disable={isLoading} onClick={()=>{createCourseHandler()}} className="bg-[#0066FF] hover:bg-blue-700 text-white cursor-pointer">
            {
              isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4  animate-spin"/>
                please wait ...
              </>
              ) : "Create"
            }
            </Button>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
