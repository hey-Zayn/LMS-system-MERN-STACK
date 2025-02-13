import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { CheckCircle2, CircleIcon } from "lucide-react";
import { useGetCourseProgressQuery, useUpdateLectureProgressMutation, useCompleteCourseMutation, useInCompleteCourseMutation } from "@/features/api/courseProgressApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "sonner";
const CourseProgress = () => {
  const { courseId } = useParams();
  const { data, isLoading, isError, refetch } = useGetCourseProgressQuery(courseId);
  const [updateLectureProgress] = useUpdateLectureProgressMutation()

  const [currentLecture, setCurrentLecture] = useState(null);
  const [completeCourse,{ data:markCompleteData, isSuccess:completeSuccess, isLoading:isCompleteLoading}] = useCompleteCourseMutation()
  const [inCompleteCourse,{data:markInCompleteData, isSuccess:inCompleteSuccess, isLoading:isInCompleteLoading}] = useInCompleteCourseMutation()
  
  useEffect(() => {
    console.log(markCompleteData);

    if (completeSuccess) {
      refetch();
      toast.success(markCompleteData.message);
    }
    if (inCompleteSuccess) {
      refetch();
      toast.success(markInCompleteData.message);
    }
  }, [completeSuccess, inCompleteSuccess]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  console.log(data);

  const { courseDetails, progress, completed } = data.data;
  const { courseTitle } = courseDetails;

  // initalize the current lecture
  const initialLecture =
    currentLecture || (courseDetails.lectures && courseDetails.lectures[0]);

  // const isCompleted = true;
  const isLectureCompleted = (lectureId) => {
    return progress.some((prog) => prog.lectureId === lectureId && prog.viewed);
  };

  const handleSelectLecture = (lecture) => {
    setCurrentLecture(lecture);
    handleLectureProgress(lecture._id);
  };
  
  const handleLectureProgress = async (lectureId) => {
    await updateLectureProgress({ courseId, lectureId });
    refetch();
  };

  const handleCompleteCourse = async () => {
    await completeCourse(courseId);
  };
  const handleInCompleteCourse = async () => {
    await inCompleteCourse(courseId);
  };

 

  return (
    <div className="max-w-7xl mx-auto px-4 mt-20">
      <div className="flex  justify-between gap-4">
        <h1 className="text-2xl font-bold">Course Title</h1>
        <Button onClick={completeSuccess ? handleInCompleteCourse : handleCompleteCourse}>{completeSuccess ? "Incomplete" : "Completed"}</Button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 md:w-3/5 h-fit rounded-lg shadow-lg p-4">
          <div className="w-full h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">
            <video
              src={currentLecture?.videoUrl || initialLecture.videoUrl}
              controls
              className="w-full h-full rounded-lg object-cover"
              onPlay={() =>
                handleLectureProgress(currentLecture?._id || initialLecture._id)
              }
            ></video>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-bold">
            {`Lecture ${
                courseDetails.lectures.findIndex(
                  (lec) =>
                    lec._id === (currentLecture?._id || initialLecture._id)
                ) + 1
              } : ${
                currentLecture?.lectureTitle || initialLecture.lectureTitle
              }`}
            </h3>
          </div>
        </div>
        {/* Course Content */}
        <div className="md:w-2/5 border rounded-lg shadow-lg p-4 ">
          <h4 className="font-semibold mb-4">Course Content</h4>
          <div className="flex-1 overflow-y-auto space-y-3">
            {courseDetails.lectures.map((lecture, index) => (
              <Card
                key={lecture._id}
                className={`mb-3 flex items-center transition transform cursor-pointer ${
                  currentLecture?._id === lecture._id
                    ? "bg-gray-100"
                    : ""
                }`}
                onClick={() => handleSelectLecture(lecture)}
              >
                <CardContent className="w-full flex items-center justify-between p-4 gap-2">
                  <div className="flex items-center gap-2 w-full">
                    <div className="flex items-center gap-2">
                      {isLectureCompleted(lecture._id) ? (
                        <CheckCircle2 className="w-6 h-6 text-green-500" />
                      ) : (
                        <CircleIcon className="w-6 h-6 text-gray-500" />
                      )}
                    </div>
                    <div>
                      <CardTitle>{lecture.lectureTitle}</CardTitle>
                    </div>
                  </div>
                 
                  {/* {isLectureCompleted(lecture._id) && (
                    <Badge
                    variant="outline"
                    className={`flex ${
                      completed ? "bg-green-600 text-green-200" : "bg-red-600"
                    } text-white`}
                  >
                    {completed ? "Completed" : "Incompleted"}
                  </Badge>
                  )} */}
                  {isLectureCompleted(lecture._id) && (
                    <Badge
                      variant={"outline"}
                      className="bg-green-200 text-green-600"
                    >
                      Completed
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseProgress;
//
