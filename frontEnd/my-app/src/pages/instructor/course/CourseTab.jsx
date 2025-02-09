import RichTextEditor from "@/components/RichTextEditor";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowUpFromLine,
  EyeOff,
  Loader2,
  Trash2,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import { useEditCourseMutation, useGetCourseByIdQuery } from "@/features/api/CourseApi";
import { useEffect } from "react";
import { toast } from "sonner";




const CourseTab = () => {
  const [input, setInput] = useState({
    courseTitle: "",
    subTitle: "",
    description: "",
    category: "",
    courseLevel: "",
    coursePrice: "",
    courseThumbnail: "",
  });
  const params = useParams();
  const courseId = params.courseId;
  const {data:courseByIdData, isLoading:courseByIdLoading} = useGetCourseByIdQuery(courseId);
 
  const isPublished = false;
  // const course = courseByIdData?.course;
  useEffect(() => { 
    if (courseByIdData?.course) { 
        const course = courseByIdData?.course;
      setInput({
        courseTitle: course.courseTitle,
        subTitle: course.subTitle,
        description: course.description,
        category: course.category,
        courseLevel: course.courseLevel,
        coursePrice: course.coursePrice,
        courseThumbnail: "",
      });
    }
  }, [courseByIdData]);

  const [previewThumbnail, setPreviewThumbnail] = useState("");
 
  const navigator = useNavigate();


  const [editCourse,{data, isLoading, isSuccess, error}] = useEditCourseMutation();


  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const selectCategory = (value) => {
    setInput({ ...input, category: value });
  };
  const selectCourseLevel = (value) => {
    setInput({ ...input, categoryLevel: value });
  };
  // get file

  const selectThumbnail = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setInput({ ...input, courseThumbnail: file });
      const fileReader = new FileReader();
      fileReader.onloadend = () => setPreviewThumbnail(fileReader.result);
      fileReader.readAsDataURL(file);
    }
  };

  const updateCourseHandler = async () => {
    const formData = new FormData();
    formData.append("courseTitle", input.courseTitle);
    formData.append("subTitle", input.subTitle);
    formData.append("description", input.description);
    formData.append("category", input.category);
    formData.append("courseLevel", input.courseLevel);
    formData.append("coursePrice", input.coursePrice);
    formData.append("courseThumbnail", input.courseThumbnail);

    await editCourse({ formData, courseId });
  };

  useEffect(()=>{
    if(isSuccess){
      toast.success(data.message || "Course Updated")
    }
    if(error){
      toast.error(error.data.message || "Failed to Course Updated")
    }
  },[isSuccess,error,data,]);


  if(courseByIdLoading) return <h1>Loading...</h1>

  return (
    <div>
      <Card>
        <CardHeader className="flex flex-row justify-between">
          <div>
            <CardTitle>Basic Course Information</CardTitle>
            <CardDescription>
              Make changes to your course here. Click save when you are done.
            </CardDescription>
          </div>
          <div className="space-x-2">
            <Button variant="outline">
              {isPublished ? (
                <>
                  UnPublished
                  <EyeOff />
                </>
              ) : (
                <>
                  Published
                  <ArrowUpFromLine />
                </>
              )}
            </Button>
            <Button variant="destructive">
              Delete Course <Trash2 />
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-4 mt-5">
            <div>
              <Label>Course Title</Label>
              <Input
                type="text"
                placeholder="Title Here ..."
                name="courseTitle"
                value={input.courseTitle}
                onChange={changeEventHandler}
              />
            </div>
            <div className="space-y-4 mt-5">
              <Label>Subtitle</Label>
              <Input
                type="text"
                placeholder="Please write subtitle here ..."
                name="subTitle"
                value={input.subTitle}
                onChange={changeEventHandler}
              />
            </div>
            <div className="space-y-4 mt-5">
              <Label>Description</Label>
              <RichTextEditor input={input} setInput={setInput} />
            </div>
            <div className="flex items-cente gap-5">
              <div>
                <Label>Category</Label>
                <Select onValueChange={selectCategory}>
                  <SelectTrigger className="w-[280px]">
                    <SelectValue placeholder="Choose .." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Category</SelectLabel>
                      <SelectItem value="frontEndDevelopment">
                        FrontEnd Development
                      </SelectItem>
                      <SelectItem value="backEndDevelopment">
                        BackEnd Development
                      </SelectItem>
                      <SelectItem value="fullStackDevelopment">
                        Full Stack Development
                      </SelectItem>
                      <SelectItem value="dataBase">DataBase</SelectItem>
                      <SelectItem value="mernStack">MERN Stack</SelectItem>
                      <SelectItem value="meanStack">MEAN Stack</SelectItem>
                      <SelectItem value="dsa">DSA</SelectItem>
                      <SelectItem value="ai">AI</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Course Level</Label>
                <Select onValueChange={selectCourseLevel}>
                  <SelectTrigger className="w-[280px]">
                    <SelectValue placeholder="Choose Course Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Course Level</SelectLabel>

                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="advance">Advance</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Price in (PKR)</Label>
                <Input
                  type="number"
                  name="coursePrice"
                  value={input.coursePrice}
                  onChange={changeEventHandler}
                  placeholder="Rs1500"
                />
              </div>
            </div>

            <div>
              <Label>Course Thumbnail</Label>
              <Input
                type="file"
                accpect="image/*"
                className="w-fit"
                onChange={selectThumbnail}
              />
              {previewThumbnail && (
              <img
                src={previewThumbnail}
                className="e-64 my-2"
                alt="Course Thumbnail"
              />
            )}
            </div>

            <div className="space-x-2">
              <Button
                variant="destructive"
                onClick={() => {
                  navigator("/instructor/course");
                }}
              >
                Back
              </Button>

              <Button disabled={isLoading} onClick={()=>{updateCourseHandler()}}>
                {isLoading ? (
                  <>
                    Please wait ...
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  </>
                ) : (
                  "Save"
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseTab;
