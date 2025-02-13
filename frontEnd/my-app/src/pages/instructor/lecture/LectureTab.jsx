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
import {
  useEditLectureMutation,
  useGetLectureByIdQuery,
  useRemoveLectureMutation,
} from "@/features/api/CourseApi";
import { useNavigate, useParams } from "react-router-dom";
// import { Pencil } from "lucide-react"
const MEDIA_API = "http://localhost:8080/api/v1/media";

const LectureTab = () => {
  const [lectureTitle, setLectureTitle] = useState("");
  const [uploadVideoInfo, setUploadVideoInfo] = useState(null);
  const [isFree, setIsFree] = useState(false);
  const [mediaProgress, setMediaProgress] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(true);

  const { lectureId, courseId } = useParams();
  const navigate = useNavigate();
  const [editLecture, { data, isLoading, error, isSuccess }] =
    useEditLectureMutation();

  const [
    removeLecture,
    {
      data: removeData,
      isLoading: removeLoading,
      error: removeError,
      isSuccess: removeSuccess,
    },
  ] = useRemoveLectureMutation();

  const {data:lectureData} = useGetLectureByIdQuery({lectureId});
  const lecture = lectureData?.lecture;

  useEffect(()=>{
    if(lecture){
      setLectureTitle(lecture.lectureTitle);
      setIsFree(lecture.isPreviewFree);
      setUploadVideoInfo(lecture.videoInfo)
    }
  },[lecture])


  const editLectureHandler = async () => {
    console.log({ lectureTitle, uploadVideoInfo, isFree, courseId, lectureId });

    await editLecture({
      lectureTitle,
      videoInfo: uploadVideoInfo,
      isPreviewFree: isFree,
      courseId,
      lectureId,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(data.message);
    }

    if (error) {
      toast.error(error.data.message);
    }
  }, [isSuccess, error, data, navigate]);

  const removeLectureHandler = async () => {
    await removeLecture({ lectureId });
  };

  useEffect(() => {
    if (removeSuccess) {
      navigate(`/instructor/course/${courseId}/lecture`);
      toast.success(removeData.message);
    }
    if (removeError) {
      toast.error(removeError.data.message);
    }
  }, [removeSuccess, removeError, navigate, removeData, courseId]);

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
          <Button variant="destructive" onClick={removeLectureHandler}>
            Remove Lecture
          </Button>
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
            <Switch checked={isFree} onCheckedChange={() => setIsFree(!isFree)} id="airplane-mode" />
            <Label htmlFor="airplane-mode">Is this a Free lecture?</Label>
          </div>
        </div>
        {/* <Progress value={uploadProgress} /> */}
        {mediaProgress && (
          <div className="my-4 space-y-2">
            <Progress value={uploadProgress} className="h-2" />
            <p className="text-sm text-muted-foreground">
              Uploading video... {uploadProgress}% complete
            </p>
          </div>
        )}
        <div>
          <Button className="cursor-pointer mt-4 bg-[#0066FF] hover:bg-blue-700 text-white" onClick={editLectureHandler}>
            Save Changes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LectureTab;
