import { Button } from "@/components/ui/button";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate } from "react-router-dom";
import { useGetCreatorCourseQuery } from "@/features/api/CourseApi";
import { Badge } from "@/components/ui/badge";

const CourseTable = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetCreatorCourseQuery();
  if (isLoading) {
    return <h1>loading....</h1>;
  }
  console.log(`Data =>`, data);
  return (
    <div>
      <Button
        onClick={() => {
          navigate("create");
        }}
      >
        Create a new course
      </Button>
      <Table>
        <TableCaption>A list of your recent courses.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.courses.map((courses) => (
            <TableRow key={courses._id}>
              <TableCell className="font-medium">
                {courses?.coursePrice || "NA"}
              </TableCell>
              <TableCell>
                <Badge>{courses.isPublished ? "Published" : "Draft"}</Badge>  
              </TableCell>
              <TableCell>{courses.courseTitle}</TableCell>
              <TableCell className="text-right">
                <Button size="sm" variant="outline" onClick={()=>{ navigate(`${courses._id}`)}} >Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          {/* <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow> */}
        </TableFooter>
      </Table>
    </div>
  );
};

export default CourseTable;
