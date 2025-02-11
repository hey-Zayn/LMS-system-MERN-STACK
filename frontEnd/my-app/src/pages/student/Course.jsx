import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  return (
    <div>
      <Link to={`/course-detail/${course._id}`}>
        <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-2xl transfrom hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="relative">
            <img
              src={course.courseThumbnail}
              className="w-full h-36 object-cover rounded-t-lg"
              alt="course"
            />
          </div>
          <CardContent className="px-5 py-4 space-y-3">
            <h1 className="font-bold hover:underline text-lg truncate">
              {course.courseTitle}
            </h1>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="w-[30px] h-[30px] ">
                  <AvatarImage
                    src={course.creator.photoUrl || "https://github.com/shadcn.png"}
                    alt="@shadcn"
                    className="w-full rounded-full overflow-hidden cursor-pointer"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1 className="font-medium text-sm">{course.creator.name}</h1>
              </div>
              <Badge>{course.courseLevel || "Advance"}</Badge>
            </div>
            <div className="text-xl font-bold">
              <span>{course.coursePrice || "499"}</span>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default Course;
