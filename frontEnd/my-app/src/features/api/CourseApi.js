import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const COURSE_API = "http://localhost:8080/api/v1/course";

export const courseApi = createApi({
  reducerPath: "courseApi",
  tagTypes: ["Refetch_Creator_Course"],
  baseQuery: fetchBaseQuery({
    baseUrl: COURSE_API,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    createCourse: builder.mutation({
      query: ({ courseTitle, category }) => ({
        url: "",
        method: "POST",
        body: { courseTitle, category },
      }),
      invalidatesTags: ["Refetch_Creator_Course"],
    }),
    getPublishedCourses: builder.query({
      query: () => ({
        url: "/published-courses",
        method: "GET",
      }),
    }),
    getCreatorCourse: builder.query({
      query: () => ({
        url: "",
        method: "GET",
      }),
      providesTags: ["Refetch_Creator_Course"],
    }),
    editCourse: builder.mutation({
      query: ({ formData, courseId }) => ({
        url: `/${courseId}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Refetch_Creator_Course"],
    }),
    getCourseById: builder.query({
      query: (courseId) => ({
        url: `/${courseId}`,
        method: "GET"
      })
    }),
    createLecture: builder.mutation({
      query: ({ lectureTitle, courseId }) => ({
        url: `/${courseId}/lecture`, // Corrected template literal 
        method: "POST",
        body: { lectureTitle },
      }),
    }),
    getCourseLectures: builder.query({
      query: (courseId) => ({
        url: `/${courseId}/lecture`,
        method: "GET"
      }),
      providesTags: ["Refetch_Creator_Course"]
    }),
    editLecture: builder.mutation({
      query: ({ lectureId, courseId, lectureTitle, videoInfo, isPreviewFree }) => ({
        url: `/${courseId}/lecture/${lectureId}`,
        method: "PUT",
        body: { lectureTitle, videoInfo, isPreviewFree }
      }),
      invalidatesTags: ["Refetch_Creator_Course"]

    }),
    removeLecture: builder.mutation({
      query: ({ lectureId }) => ({
        url: `/lecture/${lectureId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Refetch_Creator_Course"]

    }),
    getLectureById: builder.query({
      query: ({ lectureId }) => ({
        url: `/lecture/${lectureId}`,
        method: "GET",
      }),
    }),
    publishCourse: builder.mutation({
      query: ({ courseId, query }) => ({
        url: `/${courseId}?publish=${query}`,
        method: "PATCH",
      }),

    }),


  }),

});




export const { useCreateCourseMutation, useGetCreatorCourseQuery, useEditCourseMutation,
  useGetCourseByIdQuery, useCreateLectureMutation, useGetCourseLecturesQuery, useEditLectureMutation,
  useRemoveLectureMutation, useGetLectureByIdQuery, usePublishCourseMutation, useGetPublishedCoursesQuery  } = courseApi;
