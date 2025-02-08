import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  useCreateLectureMutation,
  useGetCourseLecturesQuery,
} from "@/features/api/CourseApi";

import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import Lecture from "./Lecture";

const CreateLecture = () => {
  // const isLoading = false;
  const params = useParams();
  const courseId = params.courseId;
  const [lectureTitle, setLectureTitle] = useState("");
  const navigate = useNavigate();

  const [createLecture, { isLoading, isSuccess, error }] =
    useCreateLectureMutation();
  const {
    data: lecturesData,
    isLoading: lecturesLoading,
    isError: lecturesError,
    refetch
  } = useGetCourseLecturesQuery(courseId);
  console.log(lecturesData);

  const createLectureHandler = async () => {
    if (!lectureTitle.trim()) {
      toast.error("Lecture title cannot be empty");
      return;
    }
    try {
      await createLecture({ lectureTitle, courseId });
    } catch (err) {
      console.error("Error details:", err);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Lecture created successfully");
      refetch();
    }
    if (error) {
      toast.error(
        `Lecture creation failed: ${
          error.data?.message || error.error || "Unknown error"
        }`
      );
    }
  }, [isSuccess, error]);

  return (
    <div className="flex-1 mx-10 mt-10">
      <div className="mb-4">
        <h1 className="font-bold text-xl">
          Let&apos;s add lecture, add some basic lecture details for your new
          lecture.
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
            name="lectureTitle"
            value={lectureTitle}
            onChange={(e) => {
              setLectureTitle(e.target.value);
            }}
            placeholder="Your Title Name"
          />
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => {
              navigate(`/instructor/course/${courseId}`);
            }}
          >
            Back to course
          </Button>
          <Button disabled={isLoading} onClick={createLectureHandler}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4  animate-spin" />
                please wait ...
              </>
            ) : (
              "Create Lecture"
            )}
          </Button>
        </div>
        <div className="mt-10">
          {lecturesLoading ? (
            <p>Loading lectures...</p>
          ) : lecturesError ? (
            <p>Failed to load lectures.</p>
          ) : lecturesData.lectures.length === 0 ? (
            <p>No lectures availabe</p>
          ) : (
            lecturesData.lectures.map((lecture, index) => (
              <Lecture
                key={lecture._id}
                lecture={lecture}
                courseId={courseId}
                index={index}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateLecture;
