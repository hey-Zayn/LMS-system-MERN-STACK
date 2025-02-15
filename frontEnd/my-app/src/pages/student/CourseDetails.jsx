// import React from 'react'

import BuyCourseButton from "@/components/BuyCourseButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { BadgeInfo, Lock, PlayCircle, Star, StarHalf } from "lucide-react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";

const CourseDetails = () => {
    const params = useParams();
    const courseId = params.courseId;
    const purchasedCourse = true;
  return (
    <>
      <div className="mt-20 space-y-6">
        <div className="bg-[#2D2F31] text-white">
            <div className="max-w-7xl mx-auto py-8 md:px-8 flex flex-col gap-2">
                <h1 className="text-2xl font-bold md:text-3xl">Course Details</h1>
                <p className="text-base sm:text-lg">Course Subtitle</p>
                <p> Created by{""} <span className="font-bold text-[#C0C4FC] underline italic">Instructor Name</span></p>
                <div className="flex items-center text-sm gap-2">
                    <BadgeInfo size={16}/>
                    <p>Last updated {""} <span className="font-bold">2 days ago</span></p>
                </div> 
                    <p>1000+ students enrolled</p>
                    <p className="flex items-center gap-1">4.5 rating <Star size={16}/> <Star size={16}/> <Star size={16}/> <Star size={16}/> <StarHalf size={16}/> </p>
            </div>
        </div>
        
        <div className="max-w-7xl mx-auto my-5 px-4 md:px-8 flex flex-col lg:flex-row justify-between gap-6 ">
            <div className="w-full lg:w-1/2  space-y-5">
                <h1 className="text-xl font-bold md:text-2xl">Description</h1>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <Card>
                    <CardHeader>
                        <CardTitle>Course Overview</CardTitle>
                        <CardDescription>4 Lectures</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {
                            [1,2,3,4].map((lecture, index) => (
                                <div key={index} className="flex items-center gap-3 text-sm">
                                     <span>
                                     {
                                         true ? (<PlayCircle size={16}/>) : (<Lock size={16}/>)
                                     }
                                     </span>
                                     <p>Lecture Title</p>
                                </div>
                            ))
                        }
                    </CardContent>
                </Card>
            </div>
            <div className="w-full lg:w-1/2">
                <Card>
                    <CardContent className="p-4 flex flex-col gap-4">
                        <div className="w-full aspect-video mb-4">
                                React Viode Player
                                {/* <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" /> */}

                        </div>
                        <h1 className="">Lecture Title</h1>
                        <Separator className="my-2" />
                        <h1 className="text-lg font-semibold md:text-xl">Course Price</h1>
                    </CardContent>
                    <CardFooter>
                        {purchasedCourse ? (
                            <Link to={`/course-progress/${courseId}`}>
                                <Button className="w-full">Start Course</Button>
                            </Link>
                        ) : (
                           <BuyCourseButton courseId={courseId}/>
                        )}
                    </CardFooter>
                </Card>
            </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
