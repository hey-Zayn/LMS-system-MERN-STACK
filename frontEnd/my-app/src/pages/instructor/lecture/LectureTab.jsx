// import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";
import { useEditLectureMutation } from "@/features/api/CourseApi";
import { useParams } from "react-router-dom";
// import { Pencil } from "lucide-react"
const MEDIA_API = "http://localhost:8080/api/v1/media";

const LectureTab = () => {
  const [lectureTitle, setLectureTitle] = useState("");
  const [uploadVideoInfo, setUploadVideoInfo] = useState(null);
  const [isFree, setIsFree] = useState(false);
  const [mediaProgress, setMediaProgress] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(true);
    
  const {lectureId,courseId} = useParams();

  const[editLecture,{data, isLoading, error, isSuccess}] = useEditLectureMutation();

//   const editLectureHandler = async()=>{
//     if(!lectureTitle || !uploadVideoInfo){
//       toast.error("Please fill all the fields");
//       return;
//     }
//     if(isFree){
//       toast.error("Please select if the lecture is free or not");
//       return;
//     }

//     await editlecture({
//       lectureId,
//       courseId,
//       lectureTitle,
//       videoInfo:uploadVideoInfo,
//       isPreviewFree:isFree,


//     });
//   }
const editLectureHandler = async () => {
    console.log({ lectureTitle, uploadVideoInfo, isFree, courseId, lectureId });


    await editLecture({
      lectureTitle,
      videoInfo:uploadVideoInfo,
      isPreviewFree:isFree,
      courseId,
      lectureId,
    });


  };

  useEffect(()=>{
    if(isSuccess){
      toast.success("Lecture updated successfully");
    }
    if(error){
      toast.error("Lecture update failed");
    }
  },[isSuccess,error]);
//   
  const fileChangeHandler = async (e) => {


    const file = e.target.files[0];
    if (file) {

      const formData = new FormData();
      formData.append("file", file);
      setMediaProgress(true);
      try {
        const res = await axios.post(`${MEDIA_API}/upload-video`, formData, {
          onUploadProgress: ({ loaded, total }) => {
            setUploadProgress(Math.round((loaded * 100) / total));
          },
        });

        if (res.data.success) {
          console.log(res);
          setUploadVideoInfo({
            videoUrl: res.data.data.url,
            publicId: res.data.data.public_id,
          });
          setBtnDisabled(false);
          toast.success(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("video upload failed");
      } finally {
        setMediaProgress(false);
      }
    }
  };


  return (
    <Card>
      <CardHeader className="flex justify-between">
        <div className="flex flex-col gap-2">
          <CardTitle>Edit Lecture</CardTitle>
          <CardDescription>Make changes to the lecture details</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="destructive">Remove Lecture</Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col gap-2">
          <Label>Lecture Title</Label>
          <Input
            placeholder="Lecture Title"
            type="text"
            value={lectureTitle}
            onChange={(e) => setLectureTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label>
            Upload Video <span className="text-red-500 font-bold">*</span>
          </Label>
          <Input
            placeholder="Upload Video"
            type="file"
            accept="video/*"
            className="cursor-pointer w-fit"
            onChange={fileChangeHandler}
            // value={lectureTitle}
            // onChange={(e) => setLectureTitle(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-2 my-5">
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Is this a paid lecture?</Label>
          </div>
        </div>
        {/* <Progress value={uploadProgress} /> */}
        {mediaProgress && (
          <div className="my-4">
            <Progress value={uploadProgress} />
            <p>{uploadProgress}% uploaded</p>
          </div>
        )}
        <div>
          <Button className="cursor-pointer mt-4" onClick={editLectureHandler}>Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LectureTab;
