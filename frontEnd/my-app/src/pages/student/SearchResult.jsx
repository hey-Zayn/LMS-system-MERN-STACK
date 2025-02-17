// import React from 'react'
import client from "../../Assets/clients.png"
import { Link } from "react-router-dom"

const SearchResult = ({course}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 py-4 gap-4">
       <Link to={`/course-detail/${course._id}`} className="flex flex-col md:flex-row gap-4 w-full md:auto">
         <img src={course.courseThumbnail} alt="course-thumbnail" className="h-32 w-full md:w-56 object-cover rounded"/>
         <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold md:text-xl ">{course.courseTitle}</h3>
            <p className="text-sm text-gray-600">{course.subTitle}</p>
            <p className="text-sm  text-gray-700">Instructor : <span className="bold">{course.creator?.name}</span> </p>
            <p className="text-sm text-gray-700">Rating: 4.5</p>
         </div>
       </Link>
       <div className="mt-4 md:mt-0 md:text-right w-full md:w-auto">
        <p className="text-lg font-bold md:text-xl">PKR {course.coursePrice}</p>
       </div>
    </div>
  )
}

export default SearchResult
