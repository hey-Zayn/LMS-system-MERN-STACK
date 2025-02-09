// import React from 'react'
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Delete, Pencil, Trash } from "lucide-react";
// import { Card } from "@/components/ui/card";

const Lecture = ({ lecture, courseId, index }) => {
  const navigate = useNavigate();
  const goToUpdateLecture = () => {
    navigate(`${lecture._id}`);
  };
  return (
    <div className="flex items-center justify-between bg-[#F7F9FA] dark:bg-[#1F1F1F] px-4 py-2 rounded-md my-2">
      <h1 className="font-bold text-gray-800 dark:text-gray-100">
        Lecture - {index + 1}: {lecture.lectureTitle}
      </h1>
      <div className="flex items-center gap-2">
        <Button variant="destructive" className=" cursor-pointer">
          <Trash />
        </Button>
        <Button
          variant="outline"
          onClick={goToUpdateLecture}
          className=" cursor-pointer"
        >
          Edit
        </Button>
      </div>
    </div>
  );
};

export default Lecture;
