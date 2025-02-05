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
import React from "react";
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
  ArrowUp,
  ArrowUpFromLine,
  EyeOff,
  Loader2,
  Trash2,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";




const CourseTab = () => {
  const isPublished = false;
  const isLoading = false;
  const navigator = useNavigate();

  const [input, setInput] = useState({
    courseTitle: "",
    subTitle: "",
    description: "",
    category: "",
    courseLevel: "",
    coursePrice: "",
    courseThumbnail: "",
  });
  const changeEventHandler = (e) => {
    // e.preventDefault();
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
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
                <Select>
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
                <Select>
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
              <Input type="file" accpect="image/*" className="w-fit" />
            </div>

            <div className="space-x-2">
              <Button variant="destructive" onClick={()=>{navigator('/admin/course')}}>cancel</Button>

              <Button disabled={isLoading}>
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
