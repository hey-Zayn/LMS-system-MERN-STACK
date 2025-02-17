import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

const Course = ({ course }) => {
  return (
    <div>
      
      <Link to={`/course-detail/${course._id}`}>
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative aspect-video">
              <img src={course.courseThumbnail} alt="course-title" className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-[15px] leading-tight  truncate">{course.courseTitle}</h3>
              <div className="flex">

                <div className="flex items-center gap-3">
                  <Avatar className="w-[25px] h-[25px] ">
                    <AvatarImage
                      src={course.creator.photoUrl || "https://github.com/shadcn.png"}
                      alt="@shadcn"
                      className="w-full rounded-full overflow-hidden cursor-pointer"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  {/* <h1 className="font-medium text-sm">{course.creator.name}</h1> */}
                  <p className="mt-1 text-sm text-gray-500 line-clamp-1">{course.creator.name}</p>
                </div>
              </div>
              <div className="mt-1 flex items-center">
                <span className="text-sm font-medium text-amber-800">4.5 rating</span>
                
                <span className="ml-1 text-xs text-gray-500">(139)</span>
              </div>
              <div className="mt-1 flex items-baseline space-x-2">
                {/* <span className="text-lg font-bold">${currentPrice.toFixed(2)}</span> */}
                <span className="text-sm text-gray-500">{course.coursePrice || "499"} PKR</span>
              </div>

              <span className="mt-2 inline-block rounded-sm bg-[#eceb98] px-2 py-0.5 text-xs font-medium">
                Bestseller
              </span>

            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default Course;
