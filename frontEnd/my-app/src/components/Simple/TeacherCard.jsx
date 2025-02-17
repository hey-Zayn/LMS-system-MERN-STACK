import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import teacher from "../../Assets/teacher1.png";
import { Star } from "lucide-react";
import { Badge } from "../ui/badge";

const TeacherCard = ({name, profession, image, rating}) => {
   
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Card className="w-[292px] h-[242px]">
        <CardHeader className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-1">
            <img
              src={image}
              alt="teacher"
              className="w-[64px] h-[64px] object-cover rounded-full mb-2"
            />
            <div className="flex items-center gap-1 ">
              <Star className="w-[16px] h-[16px] text-yellow-500 " />
              <p className="text-sm font-medium">{rating} (120 reviews)</p>
            </div>
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-sm text-gray-500">{profession}</p>
          </div>
        </CardHeader>
        <CardContent className="flex items-center justify-center pb-4">
          <Badge variant="outline" className="rounded-full">
            <p className="text-sm font-medium">{profession}</p>
            
          </Badge>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherCard;
