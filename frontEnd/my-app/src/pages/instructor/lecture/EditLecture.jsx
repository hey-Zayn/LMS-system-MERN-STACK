// import React from 'react'

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import LectureTab from "./LectureTab";

const EditLecture = () => {
  const { courseId, lectureId } = useParams();
  // const {lectureId} = useParams();
  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <Link to={`/instructor/course/${courseId}/lecture`}>
            <Button size="icon" variant="outline" className="rounded-full">
              <ArrowLeft size={16} />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Edit Lecture</h1>
        </div>
      </div>
        <div>
            <LectureTab/>
        </div>
    </>
  );
};

export default EditLecture;
